import React from "react";
import Clock from "../../components/Clock/Clock";
import MealMenu from "../../components/MealMenu/MealMenu";
import Notice from "../../components/Notice/Notice";
import Weather from "../../components/Weather/Weather";
import "./Top.scss";

function Top() {
  return (
    <div className="Top">
      <div className="notice__container">
        <Notice></Notice>
      </div>
      <Clock></Clock>
    </div>
  );
}

export default Top;
