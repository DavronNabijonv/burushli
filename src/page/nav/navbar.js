import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
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
  return (
    <>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <motion.div
          className="desktop"
          variants={{
            hidden: { opacity: 0, x: -100 },
            visibility: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visibility"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Desktop_navbar />
        </motion.div>
      </div>
      <div className="mobile">
        <Mobile_navbar />
      </div>
    </>
  );
}

function Desktop_navbar() {
  const [togle, setTogle] = useState(false);
  return (
    <div className="for_fixed">
      <div className={togle ? "navbar_togle navbar" : "navbar"}>
        <div className="part_links">
          <Link
            className="logo_ancor"
            to="about"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
          >
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
            <Link
              className="a_about"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-300}
              duration={500}
            >
              <FaUser />{" "}
              <p className={togle ? "n_about" : "hide"}>Biz haqimizda</p>
            </Link>
            <Link
              className="a_komiks"
              activeClass="active"
              to="komiks"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <SiAntdesign />{" "}
              <p className={togle ? "n_komiks" : "hide"}>Komikslar</p>
            </Link>
            <Link
              className="a_jamoa"
              activeClass="active"
              to="jamoa"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <HiMiniUserGroup />{" "}
              <p className={togle ? "n_jamoa" : "hide"}>Bizning jamoa</p>
            </Link>
            <Link
              className="a_event"
              activeClass="active"
              to="ish"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <IoCodeWorkingSharp />{" "}
              <p className={togle ? "n_event" : "hide"}>Ish jarayonidan...</p>
            </Link>
            <Link
              className="a_elon"
              activeClass="active"
              to="aloqa"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
            >
              <MdOutlineWorkspacePremium />{" "}
              <p className={togle ? "n_elon" : "hide"}>E'lonlar</p>
            </Link>
            <Link
              className="a_aloqa"
              activeClass="active"
              to="aloqa"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
            >
              <MdConnectWithoutContact />{" "}
              <p className={togle ? "n_aloqa" : "hide"}>Bog`lanish</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Mobile_navbar() {
  const [togle, setTogle] = useState(false);
  return (
    <div className={togle ? "mobile_togle mobile" : "mobile"}>
      <div className="mobile_nav">
        <div className="nav1">
          <Link className="a_about">
            <FaUser /> <p className="mobile_txt">Biz</p>
          </Link>
          <Link className="a_komiks">
            <SiAntdesign /> <p className="mobile_txt">Komiks</p>
          </Link>
          <Link className="a_jamoa">
            <HiMiniUserGroup /> <p className="mobile_txt">Jamoa</p>
          </Link>
          <button
            className="mobile_btn"
            onClick={() => {
              setTogle(!togle);
            }}
          >
            <HiOutlineMenuAlt2 />
          </button>
        </div>
        <div className={togle ? "nav1 anim" : "hide_anime"}>
          <Link className="a_event">
            <IoCodeWorkingSharp /> <p className="mobile_txt">Ish</p>
          </Link>
          <Link className="a_elon">
            <MdOutlineWorkspacePremium /> <p className="mobile_txt">E'lon</p>
          </Link>
          <Link className="a_aloqa">
            <MdConnectWithoutContact /> <p className="mobile_txt">Aloqa</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
