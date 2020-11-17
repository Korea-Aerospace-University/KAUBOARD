import React from "react";
import Clock from "../../components/Clock/Clock";
import CountDown from "../../components/CountDown/CountDown";
import Links from "../../components/Links/Links";
import Notice from "../../components/Notice/Notice";
import Quotes from "../../components/Quotes/Quotes";
import Weather from "../../components/Weather/Weather";
import "./Main.scss";

function Main() {
  return (
    <div className="Main">
      <div className="Main__container">
        <article className="Main__container__upper">
          <section className="Main__dday">
            <CountDown date={`${2020}-12-24T00:00:00`}></CountDown>
          </section>
          <section className="Main__weather">
            <Weather />
          </section>
        </article>
        <article className="Main__container__lower">
          <section className="Main__event">학사일정</section>
          <section className="Main__notice">
            <Notice></Notice>
          </section>
        </article>
      </div>
      {/* <div className="Main__slogan">
        <div className="Main__slogan__1">하늘을 향한 꿈, 열정, 도전</div>
        <div className="Slogan__borderLine"></div>
        <div className="Main__slogan__2">
          한국항공대학교가 당신의 오늘을 응원합니다.
        </div>
      </div> */}
    </div>
  );
}

export default Main;
