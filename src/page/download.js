import React from "react";
import "./download.scss";

// icons
import { FaGooglePlay , FaAppStore } from "react-icons/fa";

// images
import down_back_image from '../images/download_back.jpg'

export default function Download() {
  return (
    <div className="download">

    <div className="down_container">

        <img src={down_back_image} alt="background image" loading="lazy"  className="back_image"/>

        <div className="back_image">
            <p className="download_txt">Bizning mobil ilovamizni Play market va AppStoreda yuklab olishingiz mumkin.</p>
            <div className="btns_grp">
                <button className="mobile_type"><FaGooglePlay /> Play market</button>
                <button className="mobile_type"><FaAppStore /> App Store</button>
            </div>
        </div>
{/* back image */}

    </div>
{/* down container */}
  </div>
//   download
  )
}
