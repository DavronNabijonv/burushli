import React from "react";
import "./load.scss";
import { easeInOut, motion } from "framer-motion";
import load_img from "../../images/about_logo.jpg";

export default function Load() {
  return (
    <div className="load">
      <div className="for_abs">
        <div
          className="load_txt"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <P_txt>B</P_txt>
          <P_txt>U</P_txt>
          <P_txt>R</P_txt>
          <P_txt>U</P_txt>
          <P_txt>SH</P_txt>
          <P_txt>L</P_txt>
          <P_txt>I</P_txt>
        </div>
      </div>
      <motion.img
        src={load_img}
        className="load_img"
        variants={{
          hidden_img: { opacity: 0, y: -600 },
          visible_img: { opacity: 1, y: 0 },
        }}
        initial="hidden_img"
        animate="visible_img"
        transition={{ duration: 1.5 , ease:easeInOut }}
      />
    </div>
  );
}

function P_txt({ children }) {
  return (
    <motion.p
      variants={{
        hidden_p: { opacity: 0, y: 50, rotate: 360 }, // Start without rotation
        visible_p: { opacity: 1, y: 0, rotate: 0 }, // Spin to 180 degrees
      }}
      initial="hidden_p"
      animate="visible_p"
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.p>
  );
}
