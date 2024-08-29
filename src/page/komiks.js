import React, { useState } from "react";
import "./komiks.scss";
import "../app.css";
import { komiks_data } from "../database/komiks_db";
import Pdf_modal from "../modal/pdf_modal";
import Card from "../frame_motion/card";
import Inner_nav from "../frame_motion/inner_nav";

export default function Komiks() {
  const [komiksNav, setKomiksNav] = useState({
    komiks: true,
    manga: false,
    tar_anime: false,
    mil_anime: false,
  });

  return (
    <div className="komiks">
      <Inner_nav>
      <div className="komiks_navigator">
        <p
          className={`k_navbar ${komiksNav.komiks && "active"} `}
          onClick={() => {
            setKomiksNav({
              komiks: true,
              manga: false,
              tar_anime: false,
              mil_anime: false,
            });
          }}
        >
          Komiks
        </p>
        <p
          className={`k_navbar ${komiksNav.manga && "active"} `}
          onClick={() => {
            setKomiksNav({
              komiks: false,
              manga: true,
              tar_anime: false,
              mil_anime: false,
            });
          }}
        >
          Manga
        </p>
        <p
          className={`k_navbar ${komiksNav.tar_anime && "active"} `}
          onClick={() => {
            setKomiksNav({
              komiks: false,
              manga: false,
              tar_anime: true,
              mil_anime: false,
            });
          }}
        >
          Tarjima Animelar
        </p>
        <p
          className={`k_navbar ${komiksNav.mil_anime && "active"} `}
          onClick={() => {
            setKomiksNav({
              komiks: false,
              manga: false,
              tar_anime: false,
              mil_anime: true,
            });
          }}
        >
          Milliy Animelar
        </p>
      </div>
      </Inner_nav>
      {komiksNav.komiks ? (
        <Komikslar />
      ) : komiksNav.manga ? (
        <Mangalar />
      ) : komiksNav.tar_anime ? (
        <Tarjima_Animelar />
      ) : (
        <Milliy_Animelar />
      )}
    </div>
  );
}

function Komikslar() {
  const [togleModal, setTogleModal] = useState(false);
  const [dataMod, setDataMod] = useState();
  return (
    <div className="komiks_cards">
      {togleModal ? (
        <Pdf_modal groups={dataMod} closeTogle={() => setTogleModal(false)} />
      ) : (
        ""
      )}
      {komiks_data.map((komik) => (
        <Card classNameCard={"komik"}>
          <div className="komik_card">
            <img
              src={komik.komiks_img}
              alt="Jabrmaqom birinchi o`zbek komiksi"
              className="komik_img"
            />

            <div className="komik_info">
              <p>
                Komiks nomi: <span>{komik.komiks_name}</span>
              </p>
              <p>
                Komiks holati: <span>{komik.holati}</span>
              </p>
              <p>
                Davlati: <span>{komik.davlat}</span>
              </p>
              <p>
                Janr: <span>{komik.janri}</span>
              </p>
              <p>
                Yili: <span>{komik.yili}</span>
              </p>
              <p>
                Muallif: <span>{komik.muallif}</span>
              </p>
              <p>
                Boblar: <span>{komik.boblar}</span>
              </p>
            </div>
            <img
              src={komik.muallif_img}
              alt="Muallif rasmi"
              className="muallif_img"
            />
          </div>
          <button
            className="to_read_btn"
            onClick={() => {
              setDataMod(komik.boblar_pdf);
              setTogleModal(true);
            }}
          >
            O`qish uchun bosing
          </button>
        </Card>
      ))}
    </div>
  );
}

function Mangalar() {
  return <div>Manga</div>;
}

function Tarjima_Animelar() {
  return <div>Tarjima Animelar</div>;
}

function Milliy_Animelar() {
  return <div>Milliy_Animelar</div>;
}
