import React from "react";
import "./Links.scss";

function Links() {
  return (
    <div className="Links">
      <ul className="Links__line1">
        <a href="http://lms.kau.ac.kr/">
          <li className="Links__content">
            <img src="./lms.png" alt="LMS" width="50" />
            <div>LMS</div>
          </li>
        </a>
        <a href="https://nportal.kau.ac.kr/webcrea/GB03/mdi/login.html">
          <li className="Links__content">
            <img src="./system.png" alt="종합정보시스템" width="50" />
            <div>종합정보시스템</div>
          </li>
        </a>
        <a href="https://www.kau.ac.kr/page/main.jsp">
          <li className="Links__content">
            <img src="./school.png" alt="학교 메인" width="50" />
            <div>학교 홈페이지</div>
          </li>
        </a>
        <a href="https://career.kau.ac.kr/">
          <li className="Links__content">
            <img src="./job.png" alt="일자리센터" width="50" />
            <div>일자리센터</div>
          </li>
        </a>
      </ul>
      {/* 두번째 라인 */}
      <ul className="Links__line2">
        <a href="http://su.kau.ac.kr/sugang/index.su">
          <li className="Links__content">
            <img src="./pick.png" alt="수강신청" width="50" />
            <div>수강신청</div>
          </li>
        </a>
        <a href="https://scm.kau.ac.kr/">
          <li className="Links__content">
            <img src="./manage.png" alt="역량관리시스템" width="48" />
            <div>역량관리시스템</div>
          </li>
        </a>
        <a href="http://lib.kau.ac.kr/">
          <li className="Links__content">
            <img src="./book.png" alt="중앙도서관" width="50" />
            <div>중앙도서관</div>
          </li>
        </a>
      </ul>
      <div className="Links__borderLine"></div>
    </div>
  );
}

export default Links;
