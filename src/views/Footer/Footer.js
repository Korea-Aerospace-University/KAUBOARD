import React from "react";
import CheckUpdate from "../../components/CheckUpdate/CheckUpdate";
import Links from "../../components/Links/Links";
import Suggestion from "../../components/Suggestion/Suggestion";
import "./Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      <Links></Links>
      <CheckUpdate></CheckUpdate>
      <Suggestion></Suggestion>
    </div>
  );
}

export default Footer;
