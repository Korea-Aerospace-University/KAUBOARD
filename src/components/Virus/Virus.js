import React, { useLayoutEffect, useState } from "react";
import "./Virus.scss";
import CountUp from "react-countup";
import Arrow from "../Arrow/Arrow";

const Virus = () => {
  const [seoul, setSeoul] = useState({});
  const [gyeonggi, setGyeonggi] = useState({});
  const [yesterday, setYesterday] = useState(
    new Date(new Date().valueOf() - 1000 * 60 * 60 * 24).toLocaleDateString()
  );
  const [today, setToday] = useState(new Date().toLocaleDateString());

  useLayoutEffect(() => {
    fetch("http://localhost:5000/virus")
      .then((res) => res.json())
      .then((data) => {
        setSeoul(data.seoul);
        setGyeonggi(data.gyeonggi);
      });
  }, []);

  return (
    <div className="Virus" onClick="window.open('http://ncov.mohw.go.kr/')">
      <h3>{today} 신규 확진자</h3>
      <div className="Virus__borderLine"></div>
      <div className="Virus__victims">
        <div>
          <span>서울 : </span>
          <CountUp
            start={0}
            end={isNaN(Number(seoul?.newCase)) ? 0 : Number(seoul?.newCase)}
            suffix="명"
            duration={2.75}
          />
          <span className="Virus__diff">
            (
            <Arrow state="down" />
            44명)
          </span>
        </div>
        <div>
          <span>경기 : </span>
          <CountUp
            start={0}
            end={
              isNaN(Number(gyeonggi?.newCase)) ? 0 : Number(gyeonggi?.newCase)
            }
            suffix="명"
            duration={2.75}
          />
          <span className="Virus__diff">
            (<Arrow state="up" />
            12명)
          </span>
        </div>
      </div>
    </div>
  );
};

export default Virus;
