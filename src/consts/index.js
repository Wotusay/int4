const ROUTES = {
  home: "/",
  pictureDetail: { path: "/pictures/:id", to: "/pictures/" },
  photobook: "/photobook",
  room: "/room",
  currentbox: "/currentbox",
  login: "/login",
  morningRoom: "/morningroom",
  afternoonRoom: "/afternoonroom",
  nightRoom: "/nightroom",
  dashboard: "/dashboard",
  activities: "/activities",
  boxes: { path: "/boxes/:id", to: "/boxes" },
  uploadpicture: "/uploadpicture",
  activityDetail: { path: "/activitydetail/:id", to: "/activitydetail/" },
  picturePreview: { path: "/picturepreview/:id", to: "/picturepreview/" },
  uploadComplete: "/uploadcomplete",
  pizzaconfigurator: "/pizzaconfigurator",
  quiz: "/quiz",
};

const mediaQueries = {
  mobile: 320,
  tablet: 768,
  labtop: 1440,
  desktop: 1920,
};

export { ROUTES };

export { mediaQueries };
