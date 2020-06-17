const ROUTES = {
  home: "/",
  pictureDetail: { path: "/pictures/:id", to: "/pictures/" },
  picturebook: "/picturebook",
  room: "/room",
  box: "/currentbox",
  login: "/login",
  morningRoom: "/morningroom",
  boxes: { path: "/boxes/:id", to: "/boxes" },
};

const mediaQueries = {
  mobile: 320,
  tablet: 768,
  labtop: 1440,
  desktop: 1920,
};

export { ROUTES };

export { mediaQueries };
