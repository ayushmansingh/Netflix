// ============================================================
// Customize EVERYTHING here. No code changes needed elsewhere.
// ============================================================
// 1. Drop photos/videos into the assets/ folder.
// 2. Update the paths below to match your filenames.
// 3. Open index.html in a browser.
// ============================================================

window.NETFLIX_CONFIG = {
  // PIN required to enter the partner profile (4 digits)
  pin: "1234",

  // Profiles shown on the "Who's watching?" screen.
  // The first one with `locked: true` is the one PIN-gated.
  profiles: [
    {
      name: "Your Partner's Name",  // e.g. "Sam"
      avatar: "assets/avatar.jpg",
      locked: true,
    },
    { name: "Kids",   avatar: "assets/profile-kids.png",  locked: false },
    { name: "Guest",  avatar: "assets/profile-guest.png", locked: false },
  ],

  // The big featured banner at the top of the home page.
  hero: {
    title: "Us: The Series",
    meta: "★ 100% Match  •  2024  •  Limited Series  •  Romance, Comedy",
    description:
      "An ordinary day turned into the best story ever told. Watch as two people meet, fall in love, and embarrass themselves at karaoke. A heart-warming, occasionally chaotic, always honest love story.",
    backgroundImage: "assets/hero.jpg",
  },

  // Each row is a category. `items` are the "shows" in that category.
  // `image` can be a photo OR a short looping video (mp4/webm).
  rows: [
    {
      title: "Continue Watching for You",
      items: [
        { title: "Our First Date",   image: "assets/memory-1.jpg", meta: "1h 47m  •  ★ 99% Match", description: "The night you spilled wine on me and I knew." },
        { title: "Moving In",        image: "assets/memory-2.jpg", meta: "Season 1  •  ★ 100% Match", description: "Every cardboard box was a love letter." },
        { title: "That One Trip",    image: "assets/memory-3.jpg", meta: "Limited Series  •  ★ 98% Match", description: "We got lost on purpose." },
        { title: "Sunday Pancakes",  image: "assets/memory-4.jpg", meta: "Daily  •  ★ 100% Match", description: "Our slowest, sweetest tradition." },
      ],
    },
    {
      title: "Top 10 in Our House This Week",
      top10: true,
      items: [
        { title: "The Couch Arc",        image: "assets/top-1.jpg" },
        { title: "Saturday Errands",     image: "assets/top-2.jpg" },
        { title: "Cooking Disasters",    image: "assets/top-3.jpg" },
        { title: "Dog Park Chronicles",  image: "assets/top-4.jpg" },
        { title: "Karaoke Night",        image: "assets/top-5.jpg" },
        { title: "The Long Drive",       image: "assets/top-6.jpg" },
      ],
    },
    {
      title: "Because You Loved Me",
      items: [
        { title: "Coffee in Bed",      image: "assets/love-1.jpg", meta: "★ 100% Match", description: "A slow-burn morning ritual." },
        { title: "3am Talks",          image: "assets/love-2.jpg", meta: "★ 99% Match",  description: "When the world is quiet enough to be honest." },
        { title: "Holding Your Hand",  image: "assets/love-3.jpg", meta: "★ 100% Match", description: "The original blockbuster." },
        { title: "Your Laugh",         image: "assets/love-4.jpg", meta: "★ 100% Match", description: "Critics agree: unmatched." },
        { title: "Goodnight",          image: "assets/love-5.jpg", meta: "★ 100% Match", description: "Every. Single. Episode." },
      ],
    },
    {
      title: "Trending Now",
      items: [
        { title: "Date Night",         image: "assets/trend-1.jpg" },
        { title: "Lazy Sundays",       image: "assets/trend-2.jpg" },
        { title: "Inside Jokes",       image: "assets/trend-3.jpg" },
        { title: "Dancing in the Kitchen", image: "assets/trend-4.jpg" },
        { title: "The Anniversary Special",   image: "assets/trend-5.jpg" },
      ],
    },
    {
      title: "My List",
      items: [
        { title: "Forever",                image: "assets/list-1.jpg" },
        { title: "Tomorrow",               image: "assets/list-2.jpg" },
        { title: "Every Day After This",   image: "assets/list-3.jpg" },
      ],
    },
  ],
};
