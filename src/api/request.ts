import Taro from "@tarojs/taro";

const baseUrl = "https://www.aide-cloud.cn:18002";

const request = {
  get: (api: string, data: any = {}) =>
    Taro.request({
      url: `${baseUrl}${api}`,
      method: "GET",
      data: data
    }),
  post: (api: string, data: any = {}) =>
    Taro.request({
      url: `${baseUrl}${api}`,
      method: "POST",
      data: data
    })
};

export default request;
