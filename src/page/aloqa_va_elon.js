import React from "react";
import "./aloqa_va_elon.scss";
import danat from "../images/danat_img.jpg";

export default function Aloqa_va_elon() {
  return (
    <div className="aloqa">
      <div className="elon_part">
        <img src={danat} alt="karta rasmi" className="danat_img" />
        <div className="elon_txt_group">
          <h3>Burushli studio</h3>
          <p>
            Jabrmaqom tasviriy adabiyoti chiqarilishi to’xtab qolmasligi uchun
            donat funksiyasini ochishga qaror qildik Donat qilingan har bir so’m
            proyekt chiqish tezligi va sifatini oshirishga ketadi Proyektni
            og’ir damlarida qo’lab turgan har bir qaxramon ismi Jabrmaqom boblar
            oxirida muhirlanib qoladi odlindan qo’llab-quvvatlaganingiz uchun
            katta raxmat
          </p>
          <p>
            (Donat chekni{" "}
            <a href="https://t.me/burushli_studio">@burushli_studio</a>{" "}
            telegramga junativoring, shunda ismingizni shon-sharaflar postida
            yozolamiz )
          </p>
        </div>
      </div>
      <div className="aloqa_part">
        <h3>Xabar jo`natish</h3>
        <div className="input">
          <p>Ismingiz:</p>
          <input type="text" placeholder="Ismingizni kiriting" required />
        </div>
        <div className="input">
          <p>Telefon raqamingiz:</p>
          <input type="text" placeholder="Telefon raqam kiriting" required />
        </div>
        <div className="input">
          <p>Savol va takliflar uchun:</p>
          <textarea placeholder="Savol va takliflarni yozing..." required />
        </div>
        <button className="aloqa_btn">Jo`natish</button>
      </div>
    </div>
  );
}
