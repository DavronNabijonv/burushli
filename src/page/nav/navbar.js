import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-scroll";
// iconlar wismi
import { FaUser } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoCodeWorkingSharp, IoCloseSharp } from "react-icons/io5";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

// images
import burushliLogo from "../../images/burushli_logo.jpg";

export default function Navbar() {
  const [togle, setTogle] = useState(false);
  return (
    <div className={togle ? "navbar_togle navbar":"navbar"}>
      <div className="part_links">
        <Link>
          <img
            src={burushliLogo}
            alt="sayt_logo_rasmi"
            className="main_logo_img"
          />{" "}
          <p className={togle ? "logo_txt" : "hide"}> Burushli </p>
        </Link>
        <div className="link_items">
          <button
            className="togle_btn"
            onClick={() => {
              setTogle(!togle);
            }}
          >
            {togle ? <IoCloseSharp /> : <HiOutlineMenuAlt2 />}{" "}
          </button>
          <Link className="a_about">
            <FaUser />{" "}
            <p className={togle ? "n_about" : "hide"}>Biz haqimizda</p>
          </Link>
          <Link className="a_komiks">
            <SiAntdesign />{" "}
            <p className={togle ? "n_komiks" : "hide"}>Komikslar</p>
          </Link>
          <Link className="a_jamoa">
            <HiMiniUserGroup />{" "}
            <p className={togle ? "n_jamoa" : "hide"}>Bizning jamoa</p>
          </Link>
          <Link className="a_event">
            <IoCodeWorkingSharp />{" "}
            <p className={togle ? "n_event" : "hide"}>Ish jarayonidan...</p>
          </Link>
          <Link className="a_elon">
            <MdOutlineWorkspacePremium />{" "}
            <p className={togle ? "n_elon" : "hide"}>E'lonlar</p>
          </Link>
          <Link className="a_aloqa">
            <MdConnectWithoutContact />{" "}
            <p className={togle ? "n_aloqa" : "hide"}>Aloqa</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
