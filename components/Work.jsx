"use client"

import Image from 'next/image'
import styles from './Work.module.css'
import { gsap } from 'gsap';
import  ScrollTrigger  from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useGSAP(()=>{
      const tl=gsap.timeline();
      tl.from('#workp',{
        y:-40,
        opacity:0,
        duration:0.8,
        scrollTrigger:{
        trigger:"#workp",
          scroller:"body",
          scrub:1,
          start:"top 100%",
          end:"top 50%"
        }
      })
      tl.from('#workh2',{
        x:-80,
        duration:0.8,
        scrollTrigger:{
        trigger:"#workh2",
          scroller:"body",
          scrub:1,
          start:"top 100%",
          end:"top 50%"
        }
      })
      tl.from('#workp2',{
        y:-40,
        opacity:0,
        duration:0.8,
        scrollTrigger:{
        trigger:"#workp2",
          scroller:"body",
          scrub:1,
          start:"top 100%",
          end:"top 50%"
        }
      })
      tl.from('#inWork',{
        opacity:0,
        scrollTrigger:{
        trigger:"#inWork",
          scroller:"body",
          scrub:1,
          start:"top 100%",
          end:"top 50%"
        }
      })
      tl.from('#workP3',{
        y:80,
        opacity:0,
        duration:0.8,
        scrollTrigger:{
        trigger:"#workP3",
          scroller:"body",
          scrub:1,
          start:"top 100%",
          end:"top 70%"
        }
      })
      tl.from('#workBtn',{
        scale:0,
        opacity:0,
        scrollTrigger:{
        trigger:"#workBtn",
          scroller:"body",
          start:"top 100%",
        }
      })
  },[])
  return (
    <section>
      <div className={styles.work}>
        <p  id='workp' className={styles.workp}>We take privacy seriously</p>
        <h2 id='workh2'  className={styles.workh2}>Before you get started</h2>
        <p id='workp2' className={styles.workp2}>"We won't share your answers with anyone (and won't ever tell you which friends said what about you)"</p>
            <div id='inWork' className={styles.inWork}>
                <p className={styles.inPara}>with love,</p>
                <Image src='/assets/sign.png' width={72} height={40} alt='sign' className={styles.sign} />
            </div>
            <button id='workBtn' className={styles.workBtn}>Start a test</button>
        <p id='workP3' className={styles.workp3}>Take only 5 minutes</p>
      </div>
    </section>
  )
}

export default Work
