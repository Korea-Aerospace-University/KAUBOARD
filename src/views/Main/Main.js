import React from "react";
import Clock from "../../components/Clock/Clock";
import CountDown from "../../components/CountDown/CountDown";
import Links from "../../components/Links/Links";
import Notice from "../../components/Notice/Notice";
import Quotes from "../../components/Quotes/Quotes";
import Schedule from "../../components/Schedule/Schedule";
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
          <section className="Main__schedule">
            <Quotes></Quotes>
          </section>
          <section className="Main__notice">
            <Notice></Notice>
          </section>
        </article>
      </div>
    </div>
  );
}

export default Main;
