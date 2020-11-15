import React from "react";
import "./Notice.scss";

function Notice() {
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
          <article>
            [항공대학군단] 제 50, 51기 학군사관후보생 최종합격자 공지
          </article>
          <article>
            2020학년도 제2학기 재학생 및 연구등록 등록기간 및 방법 안내
          </article>
          <article>힐링 집단상담 실시 [학생마일리지10시간]</article>
          <article>2020 블루밍 총여학생회 장학금(생활비성) 신청 안내</article>
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
          <article>2020학년도 동계 계절학기 실시 안내</article>
          <article>조기 취업학생 수업 대체인정 시행 안내 (변경)</article>
          <article>학부모학사정보서비스 실시 안내</article>
          <article>유고결석 인정 기타 사유 세부기준 및 신청 절차 안내</article>
        </div>
      </nav>
    </div>
  );
}

export default Notice;
