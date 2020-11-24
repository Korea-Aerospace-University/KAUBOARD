import React, { useEffect, useState } from "react";
import "./Weather.scss";

const timeStamp = new Date().getTime();

const setDay = (day) => {
  switch (day) {
    case 0:
      return "일";
    case 1:
      return "월";
    case 2:
      return "화";
    case 3:
      return "수";
    case 4:
      return "목";
    case 5:
      return "금";
    case 6:
      return "토";
    default:
      return;
  }
};

const weekData = [
  {
    month: new Date(timeStamp + 86400000 * 1).getMonth() + 1,
    date: new Date(timeStamp + 86400000 * 1).getDate(),
    day: setDay(new Date(timeStamp + 86400000 * 1).getDay()),
  },
  {
    month: new Date(timeStamp + 86400000 * 2).getMonth() + 1,
    date: new Date(timeStamp + 86400000 * 2).getDate(),
    day: setDay(new Date(timeStamp + 86400000 * 2).getDay()),
  },
  {
    month: new Date(timeStamp + 86400000 * 3).getMonth() + 1,
    date: new Date(timeStamp + 86400000 * 3).getDate(),
    day: setDay(new Date(timeStamp + 86400000 * 3).getDay()),
  },
  {
    month: new Date(timeStamp + 86400000 * 4).getMonth() + 1,
    date: new Date(timeStamp + 86400000 * 4).getDate(),
    day: setDay(new Date(timeStamp + 86400000 * 4).getDay()),
  },
  {
    month: new Date(timeStamp + 86400000 * 5).getMonth() + 1,
    date: new Date(timeStamp + 86400000 * 5).getDate(),
    day: setDay(new Date(timeStamp + 86400000 * 5).getDay()),
  },
];

function Weather() {
  const [currentIcon, setCurrentIcon] = useState("");
  const [currentTemp, setCurrentTemp] = useState("");
  const [perceptionTemp, setPerceptionTemp] = useState("");
  const [weeklyIcon, setWeeklyIcon] = useState([]);
  const [weeklyTemp, setWeeklyTemp] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetch("https://calm-mesa-43659.herokuapp.com/weather")
      .then((res) => res.json())
      .then((data) => {
        setCurrentIcon(data.currentIcon);
        setCurrentTemp(data.currentTemp);
        setPerceptionTemp(data.perceptionTemp);
        setWeeklyIcon(data.weeklyIcon);
        setWeeklyTemp(data.weeklyTemp);
        setIsLoading(false);
      });
  }, []);

  const onIconFocus = () => {
    setVisible(!visible);
  };

  return (
    <div className="Weather">
      <div className="Weather__title">고양시 화전동</div>
      <div className="Weather__styleLine"></div>
      <section className="Weather__icon" onClick={onIconFocus}>
        {isLoading ? (
          <img src="./loading.svg" alt="로딩 중..." />
        ) : (
          <img src={currentIcon} alt="weather" width="60"></img>
        )}
      </section>
      <section className="Weather__temp">
        <div>기온</div>
        <span
          style={{
            display: "inline-block",
            marginTop: "8px",
            width: "4rem",
            fontFamily: "Noto Sans KR",
            fontWeight: "400",
          }}
        >
          {isLoading ? "로딩 중..." : `${parseFloat(currentTemp).toFixed(1)}°C`}
        </span>
      </section>
      <section className="Weather__perception">
        <div>체감온도</div>
        <span
          style={{
            display: "inline-block",
            marginTop: "8px",
            width: "4rem",
            fontFamily: "Noto Sans KR",
            fontWeight: "400",
          }}
        >
          {isLoading
            ? "로딩 중..."
            : `${parseFloat(perceptionTemp).toFixed(1)}°C`}
        </span>
      </section>

      <div
        className={
          visible ? `Weather__weekly__visible` : `Weather__weekly__invisible`
        }
      >
        <span style={{ fontSize: "1.1rem", fontWeight: "600" }}>주간 예보</span>
        {weeklyTemp.map((el, idx) => (
          <React.Fragment key={idx}>
            <img src={weeklyIcon[idx]} alt="icon" width="60"></img>
            <div className="Weather__weekly__content">{`${
              weekData[idx].month
            }/${weekData[idx].date} (${weekData[idx].day}) ${parseFloat(
              el
            ).toFixed(1)}°C`}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Weather;
