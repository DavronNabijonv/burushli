import React, { useState } from "react";

export default function Komiks() {
  const [komiksNav, setKomiksNav] = useState({
    komiks: true,
    manga: false,
    tar_anime: false,
    mil_anime: false,
  });

  return (
    <div className="komiks">
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
      <div className="komiks_parts">
        {komiksNav.komiks ? (
          <Komikslar />
        ) : komiksNav.manga ? (
          <Mangalar />
        ) : komiksNav.tar_anime ? (
          <Tarjima_Animelar />
        ) : (
          <Milliy_Animelar/>
        )}
      </div>
    </div>
  );
}

function Komikslar() {
  return <div>Komiks</div>;
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
