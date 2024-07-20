"use client"

import Image from 'next/image'
import styles from './Wonder.module.css'
import { gsap } from 'gsap';
import  ScrollTrigger  from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const Wonder = () => {
useGSAP(()=>{
  const tl = gsap.timeline();
    tl.from('#wPara',{
      y:-40,
      opacity:0,
      duration:0.8,
      scrollTrigger:{
      trigger:"#wPara",
        scroller:"body",
        scrub:1,
        start:"top 100%",
        end:"top 40%"
      }
    })
    tl.from('#wh2',{
      x:-80,
      opacity:0,
      duration:0.8,
      scrollTrigger:{
      trigger:"#wh2",
        scroller:"body",
        scrub:1,
        start:"top 100%",
        end:"top 40%"
      }
    })
    tl.from('#dash',{
      scaleX:0,
      opacity:0,
      duration:0.8,
      transformOrigin:"0% 50%",
      scrollTrigger:{
      trigger:"#dash",
        scroller:"body",
        scrub:1,
        start:"top 90%",
        end:"top 60%"
      }
    })
    tl.from('#g1',{
      scale:0,
      duration:0.8,
      stagger:0.4,
      ease:'elastic.out',
      scrollTrigger:{
      trigger:"#g1",
        scroller:"body",
        scrub:1,
        start:"top 80%",
        end:"top 50%"
      }
    })
    tl.from('#wgpara',{
      opacity:0,
      y:30,
      duration:0.8,
      stagger:0.5,
      scrollTrigger:{
      trigger:"#wgpara",
        scroller:"body",
        scrub:1,
        start:"top 70%",
        end:"top 60%"
      }
    })
    tl.from('#y4',{
      x:40,
      y:16,
      start:0,
      ease:'ease.out',
      scrollTrigger:{
      trigger:"#y4",
        scroller:"body",
        scrub:1,
        start:"top 80%",
        end:"top 50%"
      }
    })
    tl.from('#y3',{
      x:-40,
      y:4,
      start:0,
      ease:'ease.out',
      scrollTrigger:{
      trigger:"#y3",
        scroller:"body",
        scrub:1,
        start:"top 80%",
        end:"top 50%"
      }
    })
    tl.from('#y2',{
      x:40,
      y:-10,
      start:0,
      ease:'ease.out',
      scrollTrigger:{
      trigger:"#y2",
        scroller:"body",
        scrub:1,
        start:"top 80%",
        end:"top 50%"
      }
    })
    tl.from('#y1',{
      x:-40,
      y:4,
      start:0,
      ease:'ease.out',
      scrollTrigger:{
      trigger:"#y1",
        scroller:"body",
        scrub:1,
        start:"top 80%",
        end:"top 50%"
      }
    })
    
},[])

  return (
    <section id='wonder'>
      <div className={styles.wond} >
          <div className={styles.topCont}>
            <p id='wPara' className={styles.wPara1}>Let your friends, family, and co-workers (anonymously) rate your social skills.</p>
            <h2 id='wh2' className={styles.wHead}>Ever wondered what others think of you?</h2>
          </div>
          <div  className={styles.topImg} >
              <div className={styles.grades}>
                <Image src='/assets/g1.png' id='g1' alt='grade' width={54} height={62} className={styles.g1} />
                <Image src='/assets/g2.png' id='g1' alt='grade' width={64} height={62} className={styles.g2} />
                <Image src='/assets/g3.png' id='g1' alt='grade' width={64} height={62} className={styles.g3} />
              </div>
              <Image id='dash' src='/assets/Dash.png' alt='line' width={850} height={3} className={styles.dash} />
              <div className={styles.wPara}>
                <p id='wgpara' className={styles.gpara1}>Answer questions on ycur social skills</p>
                <p id='wgpara' className={styles.gpara2}>Let othars onoryrmously answer the same
                questions about you</p>
                <p id='wgpara' className={styles.gpara3}>Find out where you and others see things
                the some way -and where not!</p>
              </div>
          </div>
          <div className={styles.wondMain}>
              <Image src='/assets/Background.png' alt='white background' width={850} height={3} className={styles.bgWhite} />
              <Image id='y1' src='/assets/y1.png' alt='popup' width={82} height={59} className={styles.y1} />
              <Image id='y2' src='/assets/y2.png' alt='popup' width={184} height={60} className={styles.y2} />
              <Image id='y3' src='/assets/y3.png' alt='popup' width={186} height={60} className={styles.y3} />
              <Image id='y4' src='/assets/y4.png' alt='popup' width={186} height={60} className={styles.y4} />
              <Image src='/assets/pbar.png' alt='progressbar' width={740} height={41} className={styles.pbar} />
          </div>
              <Image src='/assets/wImageBackup.png' alt='wonder Image' width={790} height={272} className={styles.wImageBackup} />
          <div>

          </div>
      </div>
    </section>
  )
}

export default Wonder
