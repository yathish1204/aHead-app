"use client"

import React from 'react'
import Image from "next/image"
import styles from './hero.module.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    

    // const handleResize = () => {

    


  useGSAP(()=>{
    gsap.from("#p1",{
      opacity:0,
      x:-20,
      duration:0.8
    })
    gsap.from("#h1",{
      opacity:0,
      y:20,
      duration:0.8,
      delay:0.1,
    })
    gsap.from("#btnRow",{
      opacity:0,
      y:20,
      duration:0.4,
      scrollTrigger:{
        trigger:"#btnRow",
        scroller:"body",
        start:"top 100%",
        toggleActions:"play none none none"
      }
    })
 

    const tl=gsap.timeline();
    tl.from("#circle2",{
      opacity:0,
      duration:1,
      x:-80,
      start:0,
      scrollTrigger:{
        trigger:"#circle2",
        scroller:"body",
        scrub:1,
        start:"top 100%",
      }
    })
    tl.to("#circle",{
      x:-80,
      start:0,
      scrollTrigger:{
        trigger:"#circle",
        scroller:"body",
        scrub:1,
        start:"top 100%",
      }
    })
    tl.from("#circle1",{
      opacity:0,
      scale:0.2,
      duration:1,
      y:-40,
      start:0,
      scrollTrigger:{
        trigger:"#circle1",
        scroller:"body",
        scrub:1,
        start:"top 60%",
      }
    })
    tl.to('#gPink',{
      start:0,
      rotate:50,
      y:-42,
      x:-30,
      scale:1.2,
      ease:'expo.out',
      scrollTrigger:{
        trigger:"#gPink",
        scroller:"body",
        scrub:1,
        start:"top 95%",
        ease:'elastic.inOut'
      }
    })
    tl.to('#gBrown',{
      start:0,
      rotate:-80,
      y:-50,
      scale:1.4,
      ease:'elastic.out',
      scrollTrigger:{
        trigger:"#gBrown",
        scroller:"body",
        scrub:1,
        start:"top 60%",
        ease:'elastic.inOut'
      }
    })
    tl.to('#gSky',{
      start:0,
      rotate:-40,
      y:40,
      x:-80,
      scale:0.8,
      scrollTrigger:{
        trigger:"#gSky",
        scroller:"body",
        scrub:1,
        start:"top 30%",
      }
    })
    tl.to('#flower',{
      start:0,
      rotate:20,
      y:100,
      x:-80,
      scrollTrigger:{
        trigger:"#flower",
        scroller:"body",
        scrub:1,
        start:"top 50%",
      }
    })
    tl.to('#seed',{
      start:0,
      rotate:20,
      y:20,
      x:-105,
      ease:'expo.inOut',
      scrollTrigger:{
        trigger:"#seed",
        scroller:"body",
        scrub:1,
        start:"top 40%",
      }
    })
    tl.from('#halfleaf',{
      start:0,
      rotate:20,
      y:-10,
      x:20,
      scrollTrigger:{
        trigger:"#halfleaf",
        scroller:"body",
        scrub:1,
        start:"top 10%",
      }
    })
    tl.from('#leaf',{
      start:0,
      rotate:75,
      y:100,
      scrollTrigger:{
        trigger:"#leaf",
        scroller:"body",
        scrub:1,
        start:"top 40%",
      }
    })
    tl.from('#heroImg',{
      rotate:15,
      scrollTrigger:{
        trigger:"#heroImg",
        scroller:"body",
        scrub:1,
        start:"top 70%",
      }
    })
    tl.from('#h3',{
      y:40,
      opacity:0,
      duration:1,
      ease:"back.inOut",
      scrollTrigger:{
        trigger:"#h3",
        scroller:"body",
        start:"top 80%",
      }
    })
    tl.from('#p',{
      y:30,
      x:15,
      opacity:0,
      duration:1,
      stagger:0.4,
      ease:"back.inOut",
      scrollTrigger:{
        trigger:"#p",
        scroller:"body",
        start:"top 80%",
      }
    })
    
    
  },[])
// }

// window.addEventListener("resize",handleResize,()=>{
//   ScrollTrigger.refresh();
// });


  return (
    <section id='main'>
      <div  className={styles.bg} >
      <div className={styles.left}>
        <p id='p1'  className={styles.p1}>Ahead app</p>
        <h1 id='h1' className={styles.h1}>Master your life by mastering emotions</h1>
        <div id='btnRow' className={styles.btnRow}>
        <div id='apple' className={styles.apple}>
          <Image src='/assets/apple.png' alt='apple logo' width={24} height={30} />
          <div className={styles.acont}>
            <p className={styles.p2}>Download on the</p>
            <h5 className={styles.h5}>AppStore</h5>
          </div>
        </div>
        <div id='review' className={styles.review}>
          <div className={styles.stars}>
          <Image src='/assets/star.png' alt='star' width={20} height={18} />
          <Image src='/assets/star.png' alt='star' width={20} height={18} />
          <Image src='/assets/star.png' alt='star' width={20} height={18} />
          <Image src='/assets/star.png' alt='star' width={20} height={18} />
          <Image src='/assets/star.png' alt='star' width={20} height={18} />
          </div>
          <p className={styles.p3}>100+ AppStore reviews</p>
        </div>
        </div>
      </div>
    <div className={styles.right}>
      <Image src='/assets/RightHeroImage.png' alt='Hero Image' width={626} id='heroImg' className={styles.img}  height={588}/>
    </div>

    {/* confetti Images */}
      <Image id='circle' src='/assets/circle.png' width={40} height={40} alt='confetti' className={styles.circle} />
      <Image id='circle1' src='/assets/circle.png' width={50} height={50} alt='confetti' className={styles.circle2} />
      <Image id='circle2' src='/assets/circle.png' width={50} height={50} alt='confetti' className={styles.circle3} />
      <Image id='seed' src='/assets/seed.png' width={20} height={20} alt='confetti' className={styles.seed} />
      <Image id='flower' src='/assets/flower.png' width={40} height={40} alt='confetti' className={styles.flower} />
      <Image id='leaf' src='/assets/leaf.png' width={70} height={70} alt='confetti' className={styles.leaf} />
      <Image id='halfleaf' src='/assets/halfleaf.png' width={40} height={40} alt='confetti' className={styles.halfleaf} />

      {/* ghost Images */}
      <Image id='gBrown' src='/assets/GhostBrown.png' width={50} height={50} alt='confetti' className={styles.gBrown} />
      <Image id='gPink' src='/assets/GhostPink.png' width={80} height={80} alt='confetti' className={styles.gPink} />
      <Image id='gSky' src='/assets/GhostSky.png' width={60} height={60} alt='confetti' className={styles.gSky} />

    </div>

    <div className={styles.cont}>
      <h3 id='h3'>EQ beats IQ</h3>
      <p id='p'>People with high emotional intelliggence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.</p>
      <p id='p'>They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.</p>
    </div>

    
    </section>
  )
}

export default Hero
