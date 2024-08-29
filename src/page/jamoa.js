import React from "react";
import { jamoa_data } from "../database/jamoa";
import "./jamoa.scss";
// icons
import { BiLogoTelegram, BiLogoInstagramAlt } from "react-icons/bi";
import Card from "../frame_motion/card";
import Inner_nav from "../frame_motion/inner_nav";

export default function Jamoa() {
  return (
    <div className="jamoa">
      <Inner_nav>
        <h2>Jamoa azolari:</h2>
      </Inner_nav>
      <div className="jamoa_group">
        {jamoa_data.map((jamoadosh) => (
          <Card classNameCard={"jamoa_card"}>
            <img
              src={jamoadosh.member_img}
              alt="jamoa azosi rasmi"
              className="jamoa_rasmi"
            />
            <div className="jamoa_info">
              <p>{jamoadosh.member_name}</p>
              <p>{jamoadosh.member_role}</p>
              {!(jamoadosh.member_telegram === "") && (
                <a href={jamoadosh.member_telegram}>
                  <BiLogoTelegram />
                </a>
              )}
              {!(jamoadosh.member_instagram === "") && (
                <a href={jamoadosh.member_instagram}>
                  <BiLogoInstagramAlt />
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
