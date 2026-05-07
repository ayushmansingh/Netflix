(() => {
  const cfg = window.NETFLIX_CONFIG;
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  function show(id) {
    $$(".screen").forEach((s) => s.classList.remove("active"));
    $(id).classList.add("active");
    window.scrollTo(0, 0);
  }

  // --- Loading -> ta-dum -> profiles ---
  function playTaDum() {
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      const ctx = new Ctx();
      const now = ctx.currentTime;
      const tones = [
        { f: 196.0, t: 0.0,  d: 0.18 },
        { f: 196.0, t: 0.22, d: 0.55 },
      ];
      tones.forEach(({ f, t, d }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(f, now + t);
        gain.gain.setValueAtTime(0.0001, now + t);
        gain.gain.exponentialRampToValueAtTime(0.4, now + t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + t + d);
        osc.connect(gain).connect(ctx.destination);
        osc.start(now + t);
        osc.stop(now + t + d + 0.05);
      });
    } catch {}
  }

  $("#play-intro").addEventListener("click", () => {
    $("#play-intro").style.display = "none";
    playTaDum();
    setTimeout(() => show("#screen-profiles"), 1800);
  });

  // --- Profiles ---
  function renderProfiles() {
    const wrap = $("#profiles");
    wrap.innerHTML = cfg.profiles.map((p, i) => `
      <div class="profile" data-i="${i}" style="position:relative">
        <img class="profile-avatar" src="${p.avatar}" alt="${p.name}"
             onerror="this.style.background='#333';this.removeAttribute('src')" />
        <div class="profile-name">${p.name}</div>
        ${p.locked ? '<div class="profile-lock">🔒</div>' : ''}
      </div>
    `).join("");

    wrap.querySelectorAll(".profile").forEach((el) => {
      el.addEventListener("click", () => {
        const i = +el.dataset.i;
        const p = cfg.profiles[i];
        if (p.locked) {
          $("#pin-avatar").src = p.avatar;
          show("#screen-pin");
          $$("#pin-inputs input")[0].focus();
        } else {
          // Non-partner profiles just bounce back
          alert(`${p.name} can't watch this one. 😉`);
        }
      });
    });
  }

  // --- PIN ---
  function setupPin() {
    const inputs = Array.from($$("#pin-inputs input"));
    inputs.forEach((inp, idx) => {
      inp.addEventListener("input", () => {
        inp.value = inp.value.replace(/\D/g, "").slice(0, 1);
        if (inp.value && idx < inputs.length - 1) inputs[idx + 1].focus();
        if (inputs.every((x) => x.value)) checkPin();
      });
      inp.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !inp.value && idx > 0) {
          inputs[idx - 1].focus();
        }
      });
    });

    function checkPin() {
      const entered = inputs.map((x) => x.value).join("");
      if (entered === cfg.pin) {
        $("#pin-error").classList.remove("show");
        setTimeout(() => {
          renderHome();
          show("#screen-home");
        }, 200);
      } else {
        $("#pin-error").classList.add("show");
        inputs.forEach((x) => (x.value = ""));
        inputs[0].focus();
      }
    }
  }

  // --- Home page ---
  function setMedia(el, src) {
    if (!src) return;
    if (/\.(mp4|webm|mov)$/i.test(src)) {
      const v = document.createElement("video");
      v.src = src;
      v.muted = true;
      v.loop = true;
      v.autoplay = true;
      v.playsInline = true;
      el.appendChild(v);
    } else {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "";
      img.onerror = () => { img.style.background = "#222"; img.removeAttribute("src"); };
      el.appendChild(img);
    }
  }

  function renderHome() {
    // Nav avatar = the locked (partner) profile
    const partner = cfg.profiles.find((p) => p.locked) || cfg.profiles[0];
    $("#nav-avatar").src = partner.avatar;

    // Hero
    const hero = $("#hero");
    if (cfg.hero.backgroundImage) {
      hero.style.backgroundImage = `url("${cfg.hero.backgroundImage}")`;
    }
    $("#hero-title").textContent = cfg.hero.title;
    $("#hero-meta").textContent = cfg.hero.meta;
    $("#hero-desc").textContent = cfg.hero.description;

    $(".btn-play").addEventListener("click", () => openModal({
      title: cfg.hero.title,
      meta: cfg.hero.meta,
      description: cfg.hero.description,
      image: cfg.hero.backgroundImage,
    }));
    $(".btn-info").addEventListener("click", () => openModal({
      title: cfg.hero.title,
      meta: cfg.hero.meta,
      description: cfg.hero.description,
      image: cfg.hero.backgroundImage,
    }));

    // Rows
    const rowsEl = $("#rows");
    rowsEl.innerHTML = "";
    cfg.rows.forEach((row) => {
      const rowEl = document.createElement("div");
      rowEl.className = "row" + (row.top10 ? " row-top10" : "");
      rowEl.innerHTML = `
        <h2 class="row-title">${row.title}</h2>
        <div class="row-cards"></div>
      `;
      const cards = rowEl.querySelector(".row-cards");
      row.items.forEach((item, idx) => {
        const card = document.createElement("div");
        card.className = "card";
        if (row.top10) {
          card.innerHTML = `
            <span class="card-rank">${idx + 1}</span>
            <div class="card-inner"></div>
          `;
          setMedia(card.querySelector(".card-inner"), item.image);
        } else {
          setMedia(card, item.image);
          const label = document.createElement("div");
          label.className = "card-label";
          label.textContent = item.title;
          card.appendChild(label);
        }
        card.addEventListener("click", () => openModal(item));
        cards.appendChild(card);
      });
      rowsEl.appendChild(rowEl);
    });
  }

  // --- Modal ---
  function openModal(item) {
    const media = $("#modal-media");
    media.innerHTML = "";
    setMedia(media, item.image);
    $("#modal-title").textContent = item.title || "";
    $("#modal-meta").textContent = item.meta || "★ 100% Match";
    $("#modal-desc").textContent = item.description || "An instant classic.";
    $("#modal").classList.remove("hidden");
  }
  $("#modal-close").addEventListener("click", () => $("#modal").classList.add("hidden"));
  $("#modal").addEventListener("click", (e) => {
    if (e.target.id === "modal") $("#modal").classList.add("hidden");
  });

  // --- init ---
  renderProfiles();
  setupPin();
})();
