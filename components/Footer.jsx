"use client"

import Image from 'next/image'
import styles from './Footer.module.css'
import { gsap } from 'gsap';
import  ScrollTrigger  from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useGSAP(()=>{
    const tl=gsap.timeline();
    tl.from('#flogo',{
      scale:0,
      opacity:0,
      duration:0.8,
      ease:'expo.out',
      scrollTrigger:{
      trigger:"#flogo",
        scroller:"body",
        scrub:1,
        start:"top 100%",
        end:"top 70%"
      }
    })
    tl.from('#logoText',{
      x:-80,
      duration:0.8,
      ease:'expo.out',
      scrollTrigger:{
      trigger:"#logoText",
        scroller:"body",
        scrub:1,
        start:"top 100%",
        end:"top 70%"
      }
    })
    tl.from('#link',{
      y:50,
      stagger:0.5,
      opacity:0,
      ease:'ease.out',
      scrollTrigger:{
      trigger:"#link",
        scroller:"body",
        scrub:1,
        start:"top 100%",
        end:"top 80%"
      }
    })
    
    // tl.from('#apple',{
    //   scale:0.4,
    //   scrollTrigger:{
    //   trigger:"#apple",
    //     scroller:"body",
    //     scrub:1,
    //     start:"top 100%",
    //     end:"top 80%"
    //   }
    // })
    tl.from('#copy',{
      y:50,
      opacity:0,
      scrollTrigger:{
      trigger:"#copy",
        scroller:"body",
        scrub:1,
        start:"top 100%",
        end:"top 80%"
      }
    })
    
},[])
  return (
    <footer id='footer'>
      <div className={styles.footer}>
        <div className={styles.logoCont}>
            <Image id='flogo' src='/assets/Image.png' alt='footer logo' width={66} height={60} className={styles.logoF} />
            <h2 id='logoText' className={styles.fh2}>ahead</h2>
        </div>
        <div className={styles.links}>
            <div id='link' className={styles.link1}>
                <Image src='/assets/gps.png' alt='social image' width={33} height={33} className={styles.link1Img} />
                <p className={styles.link1p}>Auguststrofe 26, 10117 Berlin</p>
            </div>
            <div id='link' className={styles.link1}>
                <Image src='/assets/mail.png' alt='social image' width={33} height={33} className={styles.link1Img} />
                <p className={styles.link1p}>hinahead-app.ccm</p>
            </div>
        </div>
        <div id='apple' className={styles.apple}>
          <Image src='/assets/apple.png' alt='apple logo' width={24} height={30} />
          <div className={styles.acont}>
            <p className={styles.p2}>Download on the</p>
            <h5 className={styles.h5}>AppStore</h5>
          </div>
        </div>
        <p className={styles.copy}>Φ 2022 Ahecd opp. All right reserved</p>
      </div>
    </footer>
  )
}

export default Footer
