import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import React, { useEffect, useState } from "react";
import {
  AtAvatar,
  AtButton,
  AtForm,
  AtIcon,
  AtInput,
  AtMessage,
  AtToast
} from "taro-ui";
import request from "../../api/request";

import "./my.scss";

const My: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");

  const [token, setToken] = useState("");

  useEffect(() => {
    if (!token) {
      Taro.getStorage({
        key: "token",
        success: function(res) {
          console.log(res);

          setToken(res.data);
          Taro.switchTab({
            url: "/pages/my/my"
          });
        },
        fail: () => {
          Taro.reLaunch({
            url: "/pages/login/login"
          });
        }
      });
    }
  }, [token]);

  const showMessage = () => {
    Taro.atMessage({ message: "消息通知", type: "info", duration: 500 });
  };

  const showToast = () => {
    Taro.showToast({
      title: "成功",
      icon: "loading",
      duration: 2000
    });
  };

  const switchTab = () => {
    // Taro.switchTab({
    //   url: "/pages/index/index"
    // });
    Taro.clearStorage({
      success: () => {
        Taro.reLaunch({
          url: "/pages/login/login"
        });
      }
    });
  };

  const requestApp = () => {
    request
      .get("/api/menu/all")
      .then(res => {
        console.log(res?.data);
      })
      .catch(err => {
        console.log("err", err);
      });
  };

  const reLaunch = () => {
    Taro.reLaunch({
      url: "/pages/login/login"
    });
  };

  return (
    <View>
      <AtAvatar circle image="https://jdc.jd.com/img/200"></AtAvatar>
      <AtMessage />
      <AtButton type="primary" onClick={requestApp}>
        requestApp
      </AtButton>
      <AtButton type="primary" onClick={switchTab}>
        switchTab
      </AtButton>
      <AtButton type="primary" onClick={reLaunch}>
        reLaunch
      </AtButton>
      <AtToast isOpened={isOpen} text="{text}" icon="clock"></AtToast>
      <AtInput
        name="keyword"
        title="文本"
        type="text"
        placeholder="单行文本"
        value={keyword}
        onChange={val => {
          setKeyword(val as string);
        }}
      />
      <AtButton
        onClick={() => {
          console.log(keyword);
        }}
      >
        提交
      </AtButton>
      <AtButton
        onClick={() => {
          setKeyword("");
        }}
      >
        重置
      </AtButton>
    </View>
  );
};

export default My;
