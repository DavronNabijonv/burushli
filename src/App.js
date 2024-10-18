import React, { useContext } from "react";

import Navbar from "./page/nav/navbar";
import { Element, animateScroll as scroll } from "react-scroll";
import "./app.css";
import About from "./page/about";
import Komiks from "./page/komiks";
import Jamoa from "./page/jamoa";
import Ish_jarayoni from "./page/ish_jarayoni";
import Aloqa_va_elon from "./page/aloqa_va_elon";
import Load from "./page/loading_page/load";
import { useEffect, useState } from "react";
import Head_nav from "./page/nav/head_nav";
import Contact_modal from "./modal/contact_modal";

// modal context for contact
export const ContactModaltogle = React.createContext();

function App() {
  const [tog_app, setTog_app] = useState(false);

  const [modalTog, setModalTog] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTog_app(true);
    }, 3000);

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <ContactModaltogle.Provider value={{modalTog,setModalTog}}>
      <div className="App">
        {/* <div className={tog_app ? "close" : "open"}>
        <Load />
      </div> */}
        <div className={tog_app ? "open" : "close"}>
          <Head_nav />
          <Navbar />
          <Element name="about" className="about">
            <About />
          </Element>
          <Element name="komiks" className="komiks">
            <Komiks />
          </Element>
          <Element name="jamoa" className="jamoa">
            <Jamoa />
          </Element>
          <Element name="ish" className="ish">
            <Ish_jarayoni />
          </Element>
          {/* <Element name="aloqa" className="aloqa">
            <Aloqa_va_elon />
          </Element> */}
        </div>
        {modalTog&&<Contact_modal/>}
      </div>
    </ContactModaltogle.Provider>
  );
}

export default App;
