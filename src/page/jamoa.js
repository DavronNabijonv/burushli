import React from "react";
import { jamoa_data } from "../database/jamoa";
import "./jamoa.scss";
// icons
import { BiLogoTelegram, BiLogoInstagramAlt } from "react-icons/bi";

export default function Jamoa() {
  return (
    <div className="jamoa">
        <h2>Jamoa azolari:</h2>
      <div className="jamoa_group">
      {jamoa_data.map((jamoadosh) => (
        <div className="jamoa_card">
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
        </div>
      ))}
      </div>
    </div>
  );
}
