// ============================================================
// Customize EVERYTHING here. No code changes needed elsewhere.
// ============================================================
// 1. Drop photos/videos into the assets/ folder.
// 2. Update the paths below to match your filenames.
// 3. Open index.html in a browser.
// ============================================================

window.NETFLIX_CONFIG = {
  // PIN required to enter the partner profile (4 digits)
  pin: "2829",

  // Profiles shown on the "Who's watching?" screen.
  // The first one with `locked: true` is the one PIN-gated.
  profiles: [
    {
      name: "Dhwani",
      avatar: "assets/ig-7.jpg",
      locked: true,
    },
    { name: "Kids",   avatar: "assets/placeholder.svg", locked: false },
    { name: "Guest",  avatar: "assets/placeholder.svg", locked: false },
  ],

  // The big featured banner at the top of the home page.
  hero: {
    title: "Us: The Series",
    meta: "★ 100% Match  •  2024  •  Limited Series  •  Romance, Comedy",
    description:
      "An ordinary day turned into the best story ever told. Watch as two people meet, fall in love, and embarrass themselves at karaoke. A heart-warming, occasionally chaotic, always honest love story.",
    backgroundImage: "assets/20260419_122628.jpg",
  },

  // Each row is a category. `items` are the "shows" in that category.
  // `image` can be a photo OR a short looping video (mp4/webm).
  rows: [
    {
      title: "Continue Watching for You",
      items: [
        { image: "assets/ig-1.jpg" },
        { image: "assets/ig-2.jpg" },
        { image: "assets/IMG_0539.MP4" },
        { image: "assets/ig-4.jpg" },
        { image: "assets/IMG_5994.MP4" },
      ],
    },
    {
      title: "Top 10 in Our House This Week",
      top10: true,
      items: [
        { image: "assets/ig-5.jpg" },
        { image: "assets/IMG_0583.MP4" },
        { image: "assets/ig-6.jpg" },
        { image: "assets/IMG_6016.MP4" },
        { image: "assets/ig-8.jpg" },
        { image: "assets/IMG_7031.MP4" },
      ],
    },
    {
      title: "Because You Loved Me",
      items: [
        { image: "assets/ig-9.jpg" },
        { image: "assets/IMG_5739.MOV" },
        { image: "assets/ig-10.jpg" },
        { image: "assets/IMG_7677.MP4" },
        { image: "assets/ig-12.jpg" },
      ],
    },
    {
      title: "Trending Now",
      items: [
        { image: "assets/IMG_7702.MOV" },
        { image: "assets/ig-13.jpg" },
        { image: "assets/IMG_7386.MP4" },
        { image: "assets/IMG_20190313_164233027.jpg" },
        { image: "assets/IMG_7081.MP4" },
      ],
    },
    {
      title: "My List",
      items: [
        { image: "assets/IMG_1206.JPG" },
        { image: "assets/IMG_20190428_182846936.jpg" },
        { image: "assets/WhatsApp Image 2025-11-10 at 22.02.44.jpeg" },
      ],
    },
  ],
};
