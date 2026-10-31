/**
 * PREVIOUS PROJECTS — edit this array to add, remove or update work.
 * Each entry follows this model:
 *
 * {
 *   title:    "Project name",                 // required, string
 *   category: "Web Design",                   // required — one of:
 *                                              //   "Software Development"
 *                                              //   "Web Design"
 *                                              //   "Intranet Development"
 *   year:     "2026",                         // required, string or number
 *   summary:  "One or two sentences on what was built and the result.",
 *   tags:     ["React", "Node.js"],           // optional, array of strings — tech/skills used
 *
 *   image:    "",                             // optional — URL to a screenshot/photo,
 *                                              //   used as the card thumbnail. Leave ""
 *                                              //   for a plain gradient placeholder.
 *   gif:      "",                             // optional — URL to an animated GIF. Shown
 *                                              //   in the popup when the card is clicked —
 *                                              //   takes priority over video and image.
 *   video:    "",                             // optional — URL to a video file (mp4/webm).
 *                                              //   Plays (with controls) in the popup if no
 *                                              //   gif is set.
 *
 *   url:      ""                              // optional — link to the live project.
 *                                              //   Leave "" to hide the link.
 * }
 *
 * Popup media priority when a card is clicked: gif || video || image.
 * The array can be empty — the Work section shows a friendly placeholder instead of breaking.
 */
export const projects = [
  // Example — replace with your real projects, or delete this entry.
  {
    title: "ProjectPQ",
    category: "Web App",
    year: "2024",
    summary: "A study platform for students to learn and practice Uniport Past Questions.",
    tags: ["express", "node.js", "mongodb", "s3 bucket"],
    image: "https://projectpq-bucket.s3.eu-north-1.amazonaws.com/site_assets/screenshot.png",
    gif: "",
    // video: "https://projectpq-bucket.s3.eu-north-1.amazonaws.com/site_assets/ppqdemov.mp4",
    video: "",
    url: "https://projectpq.name.ng/",
  },
  {
    title: "OnlineWithBeta",
    category: "SME Data Plan App",
    year: "2025",
    summary: "A web application for buying sme-data plans.",
    tags: ["expresss", "mongodb"],
    image: "https://img.osiaru.top/owb.png",
    gif: "",
    // video: "https://projectpq-bucket.s3.eu-north-1.amazonaws.com/site_assets/ppqdemov.mp4",
    video: "",
    url: "https://onlinewithbeta.name.ng/",
  },
  {
    title: "Engineer.ng",
    category: "Profile Platform",
    year: "2026",
    summary: "A profile creating platform for Nigerian Engineers to showcase their skills and connect with potential employers.",
    tags: ["next.js", "expressjs", "mongodb", "s3 bucket"],
    image: "https://img.osiaru.top/engineers.png",
    gif: "",
    video: "",

    url: "https://engineer.ng/",
  },

  {
    title: "Church Admin App",
    category: "Private App",
    year: "2026",
    summary: "A web application that helps churches and organizations Administration manage and intract with company data. (members, users, etc)",
    tags: ["react.js", "mongodb", "expressjs"],
    image: "https://img.osiaru.top/mbmb.png",
    gif: "",
    video: "",

    // url: "https://engineer.ng/",
  },

  {
    title: "Creative Verse",
    category: "web App",
    year: "2026",
    summary: "One ecosystem for creatives and the people who need them.",
    tags: ["next.js", "mongodb", "expressjs"],
    image: "https://img.osiaru.top/creatives.png",
    gif: "",
    video: "https://img.osiaru.top/video/creative.mp4",
    url: "https://creator-verse-phi.vercel.app/",

  },

  {
    title: "Church Website",
    category: "web App",
    year: "2026",
    summary: "First Baptist Church Ovom is a Bible-teaching family on the Ground of Victory, where every member is a minister, formed in the Word and sent to serve Yenagoa and beyond.",
    tags: ["next.js", "mongodb", "expressjs"],
    image: "https://img.osiaru.top/fbc-ovom.png",
    gif: "",
    // video: "https://img.osiaru.top/video/creative.mp4",

    url: "https://fbc-ovom-web-test.osiaru.top/",
  },

  {
    title: "Ashura Study",
    category: "web App",
    year: "2026",
    summary: "Ashura Study reads your PDFs, lecture slides and handwritten pages, then answers your questions with a plain explanation and the exact page it came from.",
    tags: ["html"],
    image: "https://img.osiaru.top/ashura.png",
    gif: "",
    // video: "https://img.osiaru.top/video/creative.mp4",

    url: "https://ashura-ai-study.vercel.app/",
  },

  {
    title: "Engr Seigha Ineife",
    category: "Portfolio site",
    year: "2026",
    summary: "Seigha Ineife is a registered civil engineer with more than fifteen years of experience in road, bridge, drainage and building projects across Bayelsa State.",
    tags: ["nextjs"],
    image: "https://img.osiaru.top/seigha-ineife.png",
    gif: "",
    // video: "https://img.osiaru.top/video/creative.mp4",

    url: "https://seigha-ineife.engr.ng/",
  },

  {
    title: "Hotel Site",
    category: "Landing Page",
    year: "2026",
    summary: " ( Demo ) Nun River Hotel & Spa sits on a quiet bend of Epie Creek in Yenagoa, where the Niger Delta's waterways meet the everyday rhythm of Bayelsa's capital. Every room looks out over water or garden; every evening ends with the sound of the creek.",
    tags: ["html"],
    image: "https://img.osiaru.top/hotel.png",
    gif: "",
    // video: "https://img.osiaru.top/video/creative.mp4",

    url: "https://osiaru-hotel-site.vercel.app/",
  },


  

  {
    title: "Hotel Site",
    category: "Landing Page",
    year: "2026",
    summary: " ( Demo ) Nun River Hotel & Spa sits on a quiet bend of Epie Creek in Yenagoa, where the Niger Delta's waterways meet the everyday rhythm of Bayelsa's capital. Every room looks out over water or garden; every evening ends with the sound of the creek.",
    tags: ["html"],
    image: "https://img.osiaru.top/hotel.png",
    gif: "",
    // video: "https://img.osiaru.top/video/creative.mp4",

    url: "https://osiaru-hotel-site.vercel.app/",
  },



  // {
  //   title: "Jamb PQ",
  //   category: "web App",
  //   year: "2026",
  //   summary: "A web application that helps jambites to learn and practice past questions for jamb exams.",
  //   tags: ["react.js", "expressjs", "mongodb"],
  //   image: "https://jambpq/assets/screenshot.png",
  //   gif: "",
  //   video: "",

  //   url: "https://jambpq.name.ng/",
  // }
];
