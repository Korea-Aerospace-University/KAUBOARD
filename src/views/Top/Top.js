import React from "react";
import GeneralNotice from "../../components/GeneralNotice/GeneralNotice";
import MealMenu from "../../components/MealMenu/MealMenu";
import SchoolNotice from "../../components/SchoolNotice/SchoolNotice";
import "./Top.scss";

function Top() {
  return (
    <div className="Top">
      <div className="notice__container">
        <GeneralNotice></GeneralNotice>
        <SchoolNotice></SchoolNotice>
      </div>
      <MealMenu></MealMenu>
      상단 부분
      <div className="weather">날씨</div>
    </div>
  );
}

export default Top;
