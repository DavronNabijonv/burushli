import React, { useState, useEffect , useContext } from "react";
import "./head_nav.scss";
import { ContactModaltogle, ScreenWidth } from "../../App";

// images
import logo_image from "../../images/burushli_logo.jpg";
import uzb from "../../images/uzb.png";
import rus from "../../images/russia.png";
import eng from "../../images/england.png";

// icons
import { FaTelegramPlane, FaInstagram, FaArrowUp } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";
import { MdOutlineMessage } from "react-icons/md";

export default function Head_nav() {

  // window scroll down event
  const [scrollDown,setScrollDown] = useState(true)

  // news show hide togle
  const [newsTogle, setNewsTogle] = useState(false);

  // country flag variables
  const [countryFlag, setCountryFlag] = useState(uzb);

  // useContact for hide show
  const {setModalTog} = useContext(ContactModaltogle)

  // screenWidth for change 
  const {screenWidth} = useContext(ScreenWidth);


  // scroll event function
  const downEvent = ()=>{
    window.scrollY === 0? setScrollDown(true):setScrollDown(false)
  }

  // screen scroll event
  useEffect(() => {

    // window event listener
    window.addEventListener('scroll', downEvent);

    // clear event listener
    return ()=>{
      window.removeEventListener('scroll', downEvent)
    }

  }, []);

  return (
    <div className={scrollDown? "head_nav":"head_nav scroll"}>

      <div className="head_container">

        <div className="logo_part">
          <img src={logo_image} alt="logo image" className="logo_img" />
          {screenWidth>600&&(<p>Burushli.uz</p>)}
        </div>

        <div className="head_aloqa">
          <div className="network_contact">

            <div className="news_btn">
              {screenWidth >= 800 ?(<button className="news_btn" onClick={() => {setNewsTogle(!newsTogle);}} >
                Yangiliklar
                <span style={newsTogle ? {} : { rotate: "180deg" }}>
                  <FaArrowUp />
                </span>
              </button>):(<button className="news_btn" onClick={() => {setNewsTogle(!newsTogle);}} >
                <TfiAnnouncement />
              </button>)}
              <p className={newsTogle ? "news_txt" : "hide"}>
                Jabrmaqom tasviriy adabiyoti chiqarilishi to’xtab qolmasligi
                uchun donat funksiyasini ochishga qaror qildik Donat qilingan
                har bir so’m proyekt chiqish tezligi va sifatini oshirishga
                ketadi Proyektni og’ir damlarida qo’lab turgan har bir qaxramon
                ismi Jabrmaqom boblar oxirida muhirlanib qoladi odlindan
                qo’llab-quvvatlaganingiz uchun katta raxmat.
                 <span>(Donat chekni
                @burushli_studio telegramga junativoring, shunda ismingizni
                shon-sharaflar postida yozolamiz )</span>
              </p>
            </div>

            <button className="contact_btn" onClick={()=>{setModalTog(true)}}>
              {screenWidth>=800?'Aloqa':<MdOutlineMessage />}
            </button>

            <span>
              <a href="https://t.me/burushli_studio">
                <FaTelegramPlane />
              </a>
            </span>
            <span>
              <a href="https://www.instagram.com/studio_burushli?igsh=MTJ1OTc4cW5vc3c4dQ==">
                <FaInstagram />
              </a>
            </span>

          </div>

          <div className="head_language">
            <button><img src={countryFlag} alt="country flag" /></button>
            <div className="flag_dropDown">
                <button onClick={()=>{setCountryFlag(uzb)}}><img src={uzb} alt="uzbekistan flag" /></button>
                <button onClick={()=>{setCountryFlag(rus)}}><img src={rus} alt="russia flag" /></button>
                <button onClick={()=>{setCountryFlag(eng)}}><img src={eng} alt="england flag" /></button>
            </div>
          </div>

        </div>
        {/* head_container */}
      </div>
      {/* head_nav */}
    </div> 
  );
}
