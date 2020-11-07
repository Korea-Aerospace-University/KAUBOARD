import React from "react";
import Clock from "../../components/Clock/Clock";
import Quotes from "../../components/Quotes/Quotes";
import Subway from "../../components/Subway/Subway";
import Suggestion from "../../components/Suggestion/Suggestion";
import "./Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      <Subway></Subway>
      <Quotes></Quotes>
      <Suggestion></Suggestion>
    </div>
  );
}

export default Footer;
