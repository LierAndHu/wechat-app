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
        text: "้ฆ้กต",
        selectedIconPath: "./static/index2.png",
        iconPath: "./static/index.png"
      },
      {
        pagePath: "pages/my/my",
        text: "ๆ็",
        selectedIconPath: "./static/user-circle2.png",
        iconPath: "./static/user-circle.png"
      }
    ]
  }
};
