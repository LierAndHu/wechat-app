import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import React from "react";
import { AtButton } from "taro-ui";

import "./login.scss";

const Login: React.FC = () => {
  return (
    <View>
      login page
      <AtButton
        type="primary"
        onClick={() => {
          Taro.setStorage({
            key: "token",
            data: "admin",
            success: () => {
              Taro.switchTab({
                url: "/pages/my/my"
              });
            }
          });
        }}
      >
        login
      </AtButton>
    </View>
  );
};

export default Login;
