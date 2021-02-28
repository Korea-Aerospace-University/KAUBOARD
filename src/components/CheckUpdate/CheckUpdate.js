import React, { useState } from "react";
import "./CheckUpdate.scss";

// 업데이트 시마다 무조건 바꿔주기!!
const version = "1.0.1";

function CheckUpdate() {
  const [versionState, setVersionState] = useState(null);
  const [backColor, setBackColor] = useState("#ffffff");
  const [checking, setChecking] = useState(false);
  const onUpdateBtnClick = () => {
    setChecking(true);
    fetch("https://calm-mesa-43659.herokuapp.com/checkVersion")
      .then((res) => res.json())
      .then((data) => {
        if (data.currentVersion === version) {
          setVersionState(`현재 최신 버전입니다. (v${version})`);
          setBackColor("#3b42a5");
        } else {
          setVersionState("업데이트가 필요합니다.");
          setBackColor("#b94949");
        }
        setChecking(false);
      });
  };
  return (
    <a
      onLoad={onUpdateBtnClick}
      href="https://chrome.google.com/webstore/detail/%EC%B9%B4%EC%9A%B0%EB%B3%B4%EB%93%9C/lffcahbpjjidhadlomcpckmljndafmao?utm_source=chrome-ntp-icon"
    >
      {/* 버전 정보가 있으면 텍스트 출력 */}
      {versionState ? (
        <div
          className="CheckUpdate__status"
          style={{ backgroundColor: backColor }}
        >
          {versionState}
        </div>
      ) : // 버전 정보 없으면 아이콘 출력
      checking ? (
        <img className="CheckUpdate__icon" src="./checkUpdate.svg"></img>
      ) : (
        <img
          className="CheckUpdate__icon"
          src="update.png"
          alt="업데이트 확인"
        ></img>
      )}
    </a>
  );
}

export default CheckUpdate;
