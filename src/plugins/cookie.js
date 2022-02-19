import Cookie from 'js-cookie';

const useCookie = (app) => {
  const curApp = app;
  curApp.config.globalProperties.Cookie = Cookie;
  return curApp;
};

export default useCookie;
