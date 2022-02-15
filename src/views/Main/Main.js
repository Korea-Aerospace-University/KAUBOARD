import React from "react";
import CountDown from "../../components/CountDown/CountDown";
import Notice from "../../components/Notice/Notice";
import Quotes from "../../components/Quotes/Quotes";
import Virus from "../../components/Virus/Virus";
import Weather from "../../components/Weather/Weather";
import "./Main.scss";

function Main() {
  return (
    <div className="Main">
      <div className="Main__container">
        <article className="Main__container__upper">
          <section className="Main__dday">
            <CountDown />
          </section>
          <section className="Main__weather">
            <Weather />
          </section>
        </article>
        <article className="Main__container__lower">
          <section className="Main__schedule">
            <Quotes />
            {/* <Virus></Virus> */}
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
