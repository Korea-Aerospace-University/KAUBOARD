import React from "react";
import CheckUpdate from "../../components/CheckUpdate/CheckUpdate";
import Clock from "../../components/Clock/Clock";
import Links from "../../components/Links/Links";
import Quotes from "../../components/Quotes/Quotes";
import Subway from "../../components/Subway/Subway";
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
