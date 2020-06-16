
const ROUTES = {
    home: "/",
    pictureDetail: { path: "/pictures/:id", to: "/pictures/" },
    photoBook: "/photobook/",
    room:"/room",
    box: "/currentbox"

  };

  const mediaQueries ={ 
    mobile: 320,
    tablet: 768,
    labtop: 1440,
    desktop: 1920
  };
  
  export { ROUTES };

  export {mediaQueries};
  