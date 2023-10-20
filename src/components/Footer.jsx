import React, {useState, useRef} from 'react'
import Popup from './Popup'
import Person from '../assets/avatar-michelle.jpg'

const Footer = () => {
    
    const ref1 = useRef(0);
    const ref2 = useRef(0);
    const ref3 = useRef(0);
    const childRef = useRef(0);
    
    const showPopup = (ref1, ref2, ref3, ref4) => {
      const footer = ref1.current;
      const shareBtn_wrapper = ref2.current;
      const shareBtn_icon = ref3.current.children[0];
      const popup = childRef.current;

      footer.classList.toggle(toggle_card__footer);
      footer.classList.toggle('pb-0');
      shareBtn_wrapper.classList.toggle(toggle_shareBtn_wrapper);
      shareBtn_wrapper.classList.toggle('bg-myBlue-lv2');
      shareBtn_icon.classList.toggle(toggle_shareBtn_icon);
      shareBtn_icon.classList.toggle('fill-white');
      popup.classList.toggle('opacity-0');
      popup.classList.toggle('opacity-100');
    }

  const toggle_card__footer = 'pb-2';
  const toggle_shareBtn_wrapper = 'bg-myBlue-lv4';
  const toggle_shareBtn_icon = 'fill-myBlue-lv2'

  return (
    <footer ref={ref1} className={`card__footer ${toggle_card__footer}`}>
      <div className="card__footerWrapper">
        <div>
          <img className="card__avatar" src={Person} alt="Image of the author"/>
        </div>
        <div className="card__info">
          <address className="card__infoName">Michelle Appleton</address>
          <time className="card__infoDate" dateTime="2020-06-28">28 Jun 2020</time>
        </div>
        <div className="card__shareBtn">
          <div ref={ref2} className={`card__shareBtn_wrapper ${toggle_shareBtn_wrapper}`} onClick={() => showPopup(ref1, ref2, ref3, childRef)}>
            <svg ref={ref3} className="card__shareBtn_svg" xmlns="http://www.w3.org/2000/svg" width="0.9375rem" height="0.8125rem" viewBox='0 0 15 13'>
              <path 
                className={`${toggle_shareBtn_icon}`}  
                d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
              />
            </svg>
          </div>
        </div>
      </div>   
      {/*Popup component*/}
      <Popup ref={childRef}/>
    </footer>
  )
}

export default Footer;