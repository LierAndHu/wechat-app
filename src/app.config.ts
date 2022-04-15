export default {
  pages: ["pages/my/my", "pages/index/index", "pages/login/login"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        selectedIconPath: "./static/index2.png",
        iconPath: "./static/index.png"
      },
      {
        pagePath: "pages/my/my",
        text: "我的",
        selectedIconPath: "./static/user-circle2.png",
        iconPath: "./static/user-circle.png"
      }
    ]
  }
};
