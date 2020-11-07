import React from "react";
import Clock from "../../components/Clock/Clock";
import Links from "../../components/Links/Links";
import "./Main.scss";

function Main() {
  return (
    <div className="Main">
      <div className="Main__slogan">
        <div className="Main__slogan__1">하늘을 향한 꿈, 열정, 도전</div>
        <div className="Slogan__borderLine"></div>
        <div className="Main__slogan__2">
          한국항공대학교가 당신의 오늘을 응원합니다.
        </div>
      </div>
      <Links></Links>
    </div>
  );
}

export default Main;
