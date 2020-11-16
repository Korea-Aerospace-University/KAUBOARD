import React, { useEffect, useState } from "react";
import "./Notice.scss";

function Notice() {
  useEffect(() => {
    fetch("https://calm-mesa-43659.herokuapp.com/notification")
      .then((res) => res.json())
      .then((data) => {
        setGeneralNotiList(data.generalNotiList.slice(0, 4));
        setSchoolNotiList(data.schoolNotiList.slice(0, 4));
        setIsLoading(false);
      });
  }, []);
  const [generalNotiList, setGeneralNotiList] = useState([]);
  const [schoolNotiList, setSchoolNotiList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const isNewItem = (item) => {
    console.log(new Date(item.date).getDate(), new Date().getDate());
    if (
      new Date(item.date).getDate() === new Date().getDate() &&
      new Date(item.date).getMonth() === new Date().getMonth()
    ) {
      return "new";
    } else {
      return "old";
    }
  };

  return (
    <div className="Notice">
      <nav className="Notice__general">
        <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>
          일반공지{"  "}
          <span style={{ fontSize: "0.8rem", fontWeight: 400 }}>
            General Notice
          </span>
        </div>
        <div className="Notice__border"></div>
        <div className="Notice__container">
          {isLoading
            ? "로딩 중..."
            : generalNotiList.map((item) => (
                <article className={`article__${isNewItem(item)}`}>
                  {item.content}
                </article>
              ))}
        </div>
      </nav>
      <nav className="Notice__academy">
        <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>
          학사공지{"  "}
          <span style={{ fontSize: "0.8rem", fontWeight: 400 }}>
            Academic Notice
          </span>
        </div>
        <div className="Notice__border"></div>
        <div className="Notice__container">
          {isLoading
            ? "로딩 중..."
            : schoolNotiList.map((item) => (
                <article className={`article__${isNewItem(item)}`}>
                  {item.content}
                </article>
              ))}
        </div>
      </nav>
    </div>
  );
}

export default Notice;
