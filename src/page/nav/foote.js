import React from 'react'
import './foot.scss';

// images
import logo from '../../images/burushli_logo.jpg'

// icons
import { SiGoogleplay , SiApple } from "react-icons/si";
import { Link } from 'react-scroll';
import { BiLogoTelegram,BiLogoInstagramAlt } from "react-icons/bi";

export default function Foote() {
  return (
    <div className='footer'>
        <div className='foot_container'> 

            {/* first group */}
            <div className='grps'>

                <div className='logo'>
                    <img src={logo} alt='logo_image' />
                    <p>Burushli.uz</p>
                </div>

                <p className='foot_txt'>O`zbekistondagi birinchi Tavsiyot(comics-manga) animatsiyalar chiqaruvchi studio.</p>

                <div className='app_downloadPart'>

                    <button className='download'>
                        <span className='phone_logo'><SiGoogleplay /></span>
                        <div className='txt'>
                            <span>Android uchun yuklab olish</span>
                            <span style={{color:'red'}}>Tayyorlanmoqda...</span>
                        </div>
                    </button>

                    <button className='download'>
                        <span className='phone_logo'><SiApple /></span>
                        <div className='txt'>
                            <span>Ios uchun yuklab olish</span>
                            <span style={{color:'red'}}>Tayyorlanmoqda...</span>
                        </div>
                    </button>

                </div>

            </div>
            {/* first group */}

            {/* second group */}
            <div className='grps'>
                <Link>Biz haqimizda</Link>
                <Link>Komikslar</Link>
                <Link>Bizning jamoa</Link>
                <Link>Ish jarayonidan...</Link>
            </div>
            {/* second group */}

            {/* third group */}
            <div className='grps'>
                <a  href="https://t.me/burushli_studio">Telegram <BiLogoTelegram/></a>
                <a href="https://www.instagram.com/studio_burushli?igsh=MTJ1OTc4cW5vc3c4dQ==">Instagram <BiLogoInstagramAlt/></a>
            </div>
            {/* third group */}

        </div>
        <div className='navigate_to_coder'>
            <a href='https://t.me/@ndx_09'>Frontend developer : <BiLogoTelegram/></a>
        </div>
    </div>
  )
}
