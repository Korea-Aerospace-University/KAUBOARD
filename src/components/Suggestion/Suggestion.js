import React, { useState } from "react";
import "./Suggestion.scss";

const APIkey1 = "T01EMT1K733";
const APIkey2 = "B01FKS7MQR2";
const APIkey3 = "vrRy3kMlIN1Xof0nU3QiUffX";

function Suggestion() {
  const [formVisible, setFormVisible] = useState(false);
  const [submitButtonStyle, setSubmitButtonStyle] = useState({
    text: "전달하기!",
    color: "#40368a",
  });
  const [data, setData] = useState({ email: "", description: "" });
  const onVisibleBtnClick = () => {
    setFormVisible(!formVisible);
  };

  const onInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSuggestionSubmit = (e) => {
    fetch(`https://hooks.slack.com/services/${APIkey1}/${APIkey2}/${APIkey3}`, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        attachments: [
          {
            pretext: `${data.email} 님으로부터 새로운 건의사항 도착`,
            color: "#40368a",
            fields: [
              {
                title: `${data.email}`,
                value: `${data.description}`,
                short: true,
              },
            ],
          },
        ],
      }),
    });
    e.preventDefault();
    setData({ email: "", description: "" });
    e.target.value = "";
    setSubmitButtonStyle({
      text: "전달 완료!",
      color: "#49b953",
    });
  };

  return (
    <>
      {formVisible ? (
        <div className="Suggestion">
          <div className="Suggestion__button" onClick={onVisibleBtnClick}>
            건의하기
          </div>
          <form
            className={
              formVisible
                ? "Suggestion__form__visible"
                : "Suggestion__form__invisible"
            }
            onSubmit={onSuggestionSubmit}
          >
            <label for="Suggestion__email">
              답장을 받아볼 이메일을 적어주세요!
            </label>
            <input
              id="Suggestion__email"
              type="email"
              placeholder="이메일 주소 입력"
              name="email"
              autoComplete="false"
              onChange={onInputChange}
              required
            ></input>
            <label for="Suggestion__description">내용 본문</label>
            <textarea
              id="Suggestion__description"
              placeholder="내용 본문을 입력하세요"
              rows="5"
              name="description"
              onChange={onInputChange}
              required
            ></textarea>
            <button
              type="submit"
              style={{
                padding: "0.5rem 0",
                cursor: "pointer",
                backgroundColor: `${submitButtonStyle.color}`,
                color: "white",
                border: "none",
                borderRadius: "6px",
              }}
            >
              {submitButtonStyle.text}
            </button>
          </form>
        </div>
      ) : (
        <img
          className="Suggestion__icon"
          src="suggest.png"
          onClick={onVisibleBtnClick}
        ></img>
      )}
    </>
  );
}

export default Suggestion;
