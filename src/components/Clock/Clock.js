import React, { useEffect, useState } from "react";
import "./Clock.scss";

function Clock() {
  const date = new Date();
  useEffect(() => {
    setInterval(() => {
      setClockContent({
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        date: new Date().getDate(),
        time:
          // 오후
          new Date().getHours() > 12
            ? new Date().getHours() - 12 < 10
              ? // 오후 1시 ~ 오후 9시일 경우
                "0" + (new Date().getHours() - 12).toString()
              : //
                new Date().getHours() - 12
            : new Date().getHours() < 10
            ? "0" + new Date().getHours().toString()
            : new Date().getHours(),
        minute:
          new Date().getMinutes() < 10
            ? "0" + new Date().getMinutes().toString()
            : new Date().getMinutes(),
        second:
          new Date().getSeconds() < 10
            ? "0" + new Date().getSeconds().toString()
            : new Date().getSeconds(),
      });
    }, 1000);
  }, []);
  const [isDinner, setIsDinner] = useState(
    new Date().getHours() >= 12 ? "오후" : "오전"
  );
  const [clockContent, setClockContent] = useState({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
    time:
      new Date().getHours() > 12
        ? new Date().getHours() - 12 < 10
          ? "0" + (new Date().getHours() - 12).toString()
          : new Date().getHours() - 12
        : new Date().getHours() < 10
        ? "0" + new Date().getHours().toString()
        : new Date().getHours(),
    minute:
      new Date().getMinutes() < 10
        ? "0" + new Date().getMinutes().toString()
        : new Date().getMinutes(),
    second:
      new Date().getSeconds() < 10
        ? "0" + new Date().getSeconds().toString()
        : new Date().getSeconds(),
  });

  return (
    <div className="Clock">
      <div className="Clock__date">
        {clockContent.year}년 {clockContent.month}월 {clockContent.date}일
      </div>
      <div className="Clock__time">
        {isDinner} {clockContent.time}시 {clockContent.minute}분{" "}
        {clockContent.second}초
      </div>
    </div>
  );
}

export default Clock;
