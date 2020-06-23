const ROUTES = {
  home: "/",
  pictureDetail: { path: "/pictures/:id", to: "/pictures/" },
  photobook: "/photobook",
  currentbox: "/currentbox",
  login: "/login",
  dashboard: "/dashboard",
  activities: "/activities",
  boxes: { path: "/boxes/:id", to: "/boxes" },
  uploadpicture: "/uploadpicture",
  activityDetail: { path: "/activitydetail/:id", to: "/activitydetail/" },
  picturePreview: { path: "/picturepreview/:id", to: "/picturepreview/" },
  uploadComplete: "/uploadcomplete",
  pizzaconfigurator: "/pizzaconfigurator",
  quiz: "/quiz",
  kamer: { path: "/room/:id", to: "/room/" },
  finland: "/finland",
  development: "/development",
};

const mediaQueries = {
  mobile: 320,
  tablet: 768,
  labtop: 1440,
  desktop: 1920,
};

export { ROUTES };

export { mediaQueries };
