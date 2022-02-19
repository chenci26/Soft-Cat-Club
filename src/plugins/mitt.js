import mitt from 'mitt';

const useMitt = (app) => {
  const curApp = app;
  const emitter = mitt();
  curApp.config.globalProperties.emitter = emitter;
  return curApp;
};

export default useMitt;
