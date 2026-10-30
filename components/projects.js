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
    tags: ["next.js","expressjs", "mongodb", "s3 bucket"],
    image: "https://img.osiaru.top/engineers.png",
    gif: "",
    video: "",

    url: "https://engineer.ng/",
  },

  {
    title: "New Member Follow Up",
    category: "web App",
    year: "2026",
    summary: "A web application that helps churches and organizations to follow up with new members and track their progress.",
    tags: ["react.js", "mongodb","expressjs"],
    image: "https://img.osiaru.top/mbmb.png",
    gif: "",
    video: "",

    // url: "https://engineer.ng/",
  }
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
