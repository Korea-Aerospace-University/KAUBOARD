import React from "react";
import Clock from "../../components/Clock/Clock";
import Subway from "../../components/Subway/Subway";
import Suggestion from "../../components/Suggestion/Suggestion";
import "./Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      <Subway></Subway>
      <Clock></Clock>
      <Suggestion></Suggestion>
    </div>
  );
}

export default Footer;
