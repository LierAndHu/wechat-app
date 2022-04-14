import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import React, { useState } from "react";
import { AtButton, AtForm, AtIcon, AtInput, AtMessage, AtToast } from "taro-ui";

import "./my.scss";

const My: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");

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

  const atToast = () => {
    setOpen(!isOpen);
  };

  return (
    <View>
      <AtIcon value="clock" size="30" color="#F00" />
      <AtMessage />
      <AtButton type="primary" onClick={showMessage}>
        OK
      </AtButton>
      <AtButton type="primary" onClick={atToast}>
        showToast
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
