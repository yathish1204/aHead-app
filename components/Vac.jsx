"use client"

import Image from 'next/image'
import styles from './Vac.module.css'
import { gsap } from 'gsap';
import  ScrollTrigger  from 'gsap/dist/ScrollTrigger';
import { useGSAP} from '@gsap/react';
import {useEffect, useRef} from 'react'
gsap.registerPlugin(ScrollTrigger);

const Vac = () => {

  
//   const cursorRef = useRef(null);

//   useEffect(()=>{
      
//   const cursorAnimation = (e) => {
//     if(cursorRef.current){
//       const cursorWidth = cursorRef.current.offsetWidth;
//       const cursorHeight = cursorRef.current.offsetHeight;
//       cursorRef.current.style.left=`${e.clientX-cursorWidth/2}px`;
//       cursorRef.current.style.top=`${e.clientY-cursorHeight/2}px`;
//     }
// }

// document.addEventListener("mousemove",cursorAnimation);
// return()=>{
//   document.removeEventListener("mousemove",cursorAnimation);
// }
//   },[])


    useGSAP(()=>{
        const tl=gsap.timeline();
        tl.from('#vh2',{
          y:-80,
          opacity:0,
          duration:0.8,
          scrollTrigger:{
          trigger:"#vh2",
            scroller:"body",
            scrub:1,
            start:"top 100%",
            end:"top 50%"
          }
        })
        tl.from('#card',{
          scale:0.75,
          opacity:0,
          duration:0.8,
          scrollTrigger:{
          trigger:"#card",
            scroller:"body",
            scrub:1,
            start:"top 100%",
            end:"top 70%"
          }
        })
    },[])



  return (
    <section id='vac' className={styles.vacc} >
      {/* <div className={styles.myCursor} ref={cursorRef} ></div> */}
      <div className={styles.vac}>
        <h2 id='vh2' className={styles.vh2}>Open vacancies</h2>
        <div className={styles.cards}>
            <div  id='card' className={styles.card1}>
                <h4 className={styles.vh4}>Senior Full-Stack Engineer</h4>
                <ul className={styles.ul}>
                    <li>Full-time position</li>
                    <li>Berlin or remote</li>
                    <li>65-uEK 답E-Ed무 c그니k 닭그r 더합나그ns</li>
                </ul>
                <button className={styles.vbtn1}>See more</button>
            </div>
            <div  id='card'className={styles.card2}>
                <h4 className={styles.vh4}>Senior Full-Stack Engineer</h4>
                <ul className={styles.ul} >
                    <li>Full-time position</li>
                    <li>Berlin or remote</li>
                    <li>E4D-55k.0.25-0.5096 equity share cptions</li>
                </ul>
                <button className={styles.vbtn2}>See more</button>
            </div>
            <div  id='card'className={styles.card3}>
                <h4 className={styles.vh4}>Senior Full-Stack Engineer</h4>
                <ul  className={styles.ul} >
                    <li>Full-time position</li>
                    <li>Berlin or remote</li>
                    <li>20-24k, 0.5-1.50% equity shore optionss</li>
                </ul>
                <button className={styles.vbtn3}>See more</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Vac
