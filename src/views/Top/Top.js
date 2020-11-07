import React from "react";
import Clock from "../../components/Clock/Clock";
import GeneralNotice from "../../components/GeneralNotice/GeneralNotice";
import MealMenu from "../../components/MealMenu/MealMenu";
import SchoolNotice from "../../components/SchoolNotice/SchoolNotice";
import Weather from "../../components/Weather/Weather";
import "./Top.scss";

function Top() {
  return (
    <div className="Top">
      <div className="notice__container">
        <GeneralNotice></GeneralNotice>
        <SchoolNotice></SchoolNotice>
      </div>
      <Clock></Clock>
      <Weather />
    </div>
  );
}

export default Top;
