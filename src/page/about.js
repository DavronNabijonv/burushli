import React from "react";
import "./about.scss";
import { motion } from "framer-motion";
// images va iconlar
import about_logo from "../images/about_logo.jpg";

export default function About() {
  return (
    <div className="about" style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        className="left_part"
        variants={{
          hidden: {opacity:0, y: -300 },
          visibility: {opacity:1, y: 0 },
        }}
        initial="hidden"
        animate="visibility"
        transition={{ duration: 0.7 ,ease:'easeInOut' }}
      >
        <p>
          "Burushli " media studio 2023-yilda tashkil topgan bo`lib , hozirda
          tasviriy adabiyot(komiks) sohasiga ixtisoslashgan. Keyinchalik anime
          va manga tarjimalari hamda animatsiyalar sohasida ham faoliyat
          yuritishi rejalashtirilgan.
        </p>
        <button>Bog`lanish</button>
      </motion.div>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <motion.div
          className="right_part"
          variants={{
            hidden: { opacity:0,y: 300 },
            visibility: {opacity:1, y: 0 },
          }}
          initial="hidden"
          animate="visibility"
          transition={{ duration: 0.7, ease:'easeInOut'}}
        >
          <img src={about_logo} alt="about logo image" className="about_logo" />
        </motion.div>
      </div>
    </div>
  );
}
