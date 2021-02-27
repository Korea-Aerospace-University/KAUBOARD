import React from "react";
import "./Links.scss";
import IconLink from "../IconLink/IconLink";

function Links() {
  return (
    <div className="Links">
      <ul className="Links__line1">
        <IconLink
          title="LMS"
          href="http://lms.kau.ac.kr/"
          src="./lms.svg"
          alt="LMS"
          width="50"
        />
        <IconLink
          title="종합정보시스템"
          href="https://nportal.kau.ac.kr/webcrea/GB03/mdi/login.html"
          src="./system.svg"
          alt="종합정보시스템"
          width="50"
        />
        <IconLink
          title="학교 홈페이지"
          href="https://www.kau.ac.kr/web/index.do"
          src="./university.svg"
          alt="학교 메인"
          width="50"
        />
        <IconLink
          title="일자리센터"
          href="https://career.kau.ac.kr/"
          src="./job.svg"
          alt="일자리센터"
          width="50"
        />
        {/* </ul> */}
        {/* 두번째 라인 */}
        {/* <ul className="Links__line2"> */}
        <IconLink
          title="수강신청"
          href="http://su.kau.ac.kr/sugang/index.su"
          src="./pick.svg"
          alt="수강신청"
          width="50"
        />
        <IconLink
          title="역량관리시스템"
          href="https://scm.kau.ac.kr/"
          src="./manage.svg"
          alt="역량관리시스템"
          width="50"
        />
        <IconLink
          title="중앙도서관"
          href="http://lib.kau.ac.kr/"
          src="./library.svg"
          alt="중앙도서관"
          width="50"
        />
      </ul>
      {/* <div className="Links__borderLine"></div> */}
    </div>
  );
}

export default Links;
