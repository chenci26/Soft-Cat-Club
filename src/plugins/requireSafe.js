// 防止圖片吃變數路徑找到undefined而報錯問題
const useRequireSafe = (app) => {
  const curApp = app;
  curApp.config.globalProperties.$requireSafe = (path) => {
    try {
      /* eslint-disable */
      return require(`@/assets/img/${path}`);
    } catch (err) {
      return undefined;
    }
  };
  return curApp;
};

export default useRequireSafe;
