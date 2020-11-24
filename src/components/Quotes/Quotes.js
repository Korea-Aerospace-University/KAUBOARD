import React, { useEffect, useState } from "react";
import "./Quotes.scss";

function Quotes() {
  useEffect(() => {
    fetch("https://calm-mesa-43659.herokuapp.com/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
        setIsLoading(false);
      });
  }, []);
  const [quote, setQuote] = useState({ todayQuote: "", todaySpeaker: "" });
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="Quotes">
      <div
        style={{ fontWeight: 700, marginTop: "0.5rem", fontSize: "1.05rem" }}
      >
        오늘의 한마디
      </div>
      <div className="Quotes__borderLine"></div>
      {isLoading ? (
        <>
          <div className="Quotes__quote">멋진 명언을 불러오는 중입니다.</div>
          <div className="Quotes__speaker">잠시만 기다려주세요!</div>
        </>
      ) : (
        <>
          <div className="Quotes__quote">{quote.todayQuote}</div>
          <div className="Quotes__speaker">{` - ${quote.todaySpeaker}`}</div>
        </>
      )}
    </div>
  );
}

export default Quotes;
