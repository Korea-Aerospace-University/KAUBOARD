import React from "react";
import "./IconLink.scss";

/*
Links 안에서 사용할 링크 ㅋ
*/

function IconLink({ title, href, src, alt, width }) {
  return (
    <div className="IconLink">
      <a href={href}>
        <li className="IconLink__content">
          <img src={src} alt={alt} width={width} />
          <div>{title}</div>
        </li>
      </a>
    </div>
  );
}

IconLink.defaultProps = {
  href: "",
  src: "",
  alt: "",
  width: "50",
};

export default IconLink;
