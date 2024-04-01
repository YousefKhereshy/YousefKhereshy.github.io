'use client'
import React, { useRef, useState } from "react";
import Link from "next/link";
import  Style from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHouse} from "@fortawesome/free-solid-svg-icons";
import Image  from "next/image";
import p1 from './Beautiful_gaming_headphone_-6-removebg-preview.png';
import p2 from './headphone_hrom-removebg-preview.png';
import p3 from './electronic-device-surrounded-by-nature-removebg-preview.png';

export default function Home() {
  return (
    <main className={Style.main}>
      <h1 className={Style.logo}>HECHO</h1>
      <BackGround/>
      <TextSide/>
    </main>
  );
};

function BackGround(){
  return(
    <div className={Style.background}>
      <div className={Style.circle}>
        <div className={Style.circle1}>
          <div className={Style.circle2}>
          </div>
        </div>
      </div>
      <Image src={p1} alt="p1" className={Style.i1} id="p1"/>
    </div>
  )
} 
function BackGround2(){
  return(
    <div className={Style.background}>
      <div className={Style.circle}>
        <div className={Style.circle1}>
          <div className={Style.circle2}>
          </div>
        </div>
      </div>
    </div>
  )
} 

function TextSide(){
  const BtnRef = useRef(null);
  const [Count , setCount] = useState('Buy It');
  const HandleClick = () =>{
    const clks = setCount('Paid');
  };
  return(
    <div className={Style.textside}>
      <h2 style={{fontWeight:'700'}}><p style={{color:'#900FF5', fontSize:"2.5rem"}}>HECHO</p>  <br />
          the Power of Vibe </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
           Enim beatae animi pariatur debitis eum molestias,<br />
            rerum, labore deleniti omnis voluptate, <br />
            quae aperiam voluptatum quo magni laborum. <br />
            repudiandae cum repellat ea.
          </p>
          <div className={Style.clicks}>
          </div><br />
          <button className={Style.btn} ref={BtnRef} onClick={HandleClick}>{Count}</button>
    </div>
  )
}



