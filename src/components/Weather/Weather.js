import React, { useEffect, useState } from "react";
import "./Weather.scss";

function Weather() {
  const [currentIcon, setCurrentIcon] = useState("");
  const [currentTemp, setCurrentTemp] = useState("");
  const [perceptionTemp, setPerceptionTemp] = useState("");
  const [weeklyIcon, setWeeklyIcon] = useState([]);
  const [weeklyTemp, setWeeklyTemp] = useState([]);

  useEffect(() => {
    fetch("https://calm-mesa-43659.herokuapp.com/weather")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCurrentIcon(data.currentIcon);
        setCurrentTemp(data.currentTemp);
        setPerceptionTemp(data.perceptionTemp);
        setWeeklyIcon(data.weeklyIcon);
        setWeeklyTemp(data.weeklyTemp);
      });
  }, []);
  return (
    <div className="Weather">
      <div className="Weather__title">고양시 화전동</div>
      <div className="Weather__styleLine"></div>
      <section className="Weather__icon">
        <img src={currentIcon} alt="weather" width="70"></img>
      </section>
      <section className="Weather__temp">
        <div>기온</div>
        <span
          style={{ display: "inline-block", marginTop: "8px", width: "4rem", fontFamily: 'Noto Sans KR', fontWeight: "400" }}
        >
          {parseFloat(currentTemp).toFixed(1)}°C
        </span>
      </section>
      <section className="Weather__perception">
        <div>체감온도</div>
        <span
          style={{ display: "inline-block", marginTop: "8px", width: "4rem", fontFamily: 'Noto Sans KR', fontWeight: "400" }}
        >
          {parseFloat(perceptionTemp).toFixed(1)}°C
        </span>
      </section>
    </div>
  );
}

export default Weather;
