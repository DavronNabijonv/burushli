import React from "react";
import "./navbar.scss";
import {Link} from 'react-scroll';
// iconlar wismi
import { FaUser } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoCodeWorkingSharp } from "react-icons/io5";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";

// images
import burushliLogo from '../../images/burushli_logo.jpg'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="part_links">
        <Link>
          <img
            src={burushliLogo}
            alt="sayt_logo_rasmi"
            className="main_logo_img"
          /> <p className="logo_txt"> Burushli </p>
        </Link>
        <Link className="a_about">
            <FaUser />  <p className="n_about">Biz haqimizda</p>
        </Link>
        <Link className="a_komiks">
            <SiAntdesign />  <p className="n_komiks">Komikslar</p>
        </Link>
        <Link className="a_jamoa">
            <HiMiniUserGroup />  <p className="n_jamoa">Bizning jamoa</p>
        </Link>
        <Link className="a_event">
            <IoCodeWorkingSharp />  <p className="n_event">Ish jarayonidan...</p>
        </Link>
        <Link className="a_elon">
            <MdOutlineWorkspacePremium />  <p className="n_elon">E'lonlar</p>
        </Link>
        <Link className="a_aloqa">
            <MdConnectWithoutContact />  <p className="n_aloqa">Aloqa</p>
        </Link>
      </div>
    </div>
  );
}
