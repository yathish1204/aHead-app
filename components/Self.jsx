"use client"

import Image from 'next/image'
import styles from './Self.module.css'
import { gsap } from 'gsap';
import  ScrollTrigger  from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const Self = () => {
useGSAP(()=>{
    
    const tl=gsap.timeline();

    tl.from('#h3Cont',{
        y:40,
        opacity:0,
        stagger:0.3,
        duration:0.6,
        ease:"back.inOut",
        scrollTrigger:{
          trigger:"#h3Cont",
          scroller:"body",
          start:"top 100%",
          end:"top 50%",
        }
      })
      tl.from('#pCont',{
        y:30,
        x:15,
        opacity:0,
        stagger:0.4,
        duration:0.6,
        ease:"back.inOut",
        scrollTrigger:{
          trigger:"#pCont",
          scroller:"body",
          start:"top 100%",
          end:"top 50%",
        }
      })
      tl.from('#headCont',{
        y:30,
        stagger:0.5,
        opacity:0,
        duration:0.8,
        scrollTrigger:{
        trigger:"#headCont",
          scroller:"body",
          scrub:1,
          start:"top 100%",
          end:"top 30%"
        }
      })
      tl.from('#paraCont',{
        x:70,
        stagger:0.5,
        opacity:0,
        duration:0.8,
        scrollTrigger:{
        trigger:"#paraCont",
          scroller:"body",
          scrub:1,
          start:"top 100%",
          // end:"top 30%"
        }
      })
      tl.from('#spara1',{
        y:-40,
        opacity:0,
        duration:0.8,
        scrollTrigger:{
        trigger:"#spara1",
          scroller:"body",
          scrub:1,
          start:"top 100%",
          end:"top 40%"
        }
      })
      tl.from('#shead1',{
        x:-80,
        opacity:0,
        duration:0.8,
        scrollTrigger:{
        trigger:"#shead1",
          scroller:"body",
          scrub:1,
          start:"top 100%",
          end:"top 40%"
        }
      })
      tl.from('#selfgSky',{
        x:280,
        y:140,
        rotate:-70,
        duration:0.8,
        ease:'ease.out',
        scrollTrigger:{
        trigger:"#selfgSky",
          scroller:"body",
          scrub:1,
          start:"top 100%",
          end:"top 20%"
        }
      })
 
})

  return (
    <section id='self'>
      <div className={styles.self}>
            <p id='spara1' className={styles.para1}>Wrong with self-improvement & how we're fixing it.</p>
            <div className={styles.selfDiv}>
              <h2 id='shead1' className={styles.heading}>Self-improvement. Ugh.</h2>
              <Image id='selfgSky' src='/assets/GhostSky.png' width={60} height={60} alt='sky ghost' className={styles.gSkyThird} />
            </div>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <svg width="16" height="634" viewBox="0 0 16 634" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="progress-path" fillRule="evenodd" clipRule="evenodd" d="M16 8C16 11.7277 13.4505 14.8599 10 15.748L9.99999 200.252C13.4505 201.14 16 204.272 16 208C16 211.728 13.4504 214.86 9.99999 215.748L9.99998 392.252C13.4504 393.14 16 396.272 16 400C16 403.728 13.4504 406.86 9.99998 407.748L9.99997 618.252C13.4504 619.14 16 622.272 16 626C16 630.418 12.4183 634 8 634C3.58172 634 0 630.418 0 626C0 621.582 3.58172 618 8 618V408C3.58172 408 0 404.418 0 400C0 395.582 3.58172 392 8 392V216C3.58172 216 0 212.418 0 208C0 203.582 3.58172 200 8 200V16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z" fill="#CDC2FB"/>
                    </svg>
                    

                </div>
                <div className={styles.content}>
                    <div className={styles.set1}>
                        <h3  id='headCont' className={styles.head1}>It's not as easy as 1-2-3.</h3>
                        <p id='paraCont' className={styles.para2}>The journey of change may be long, but our sessions are quick. We get
                        to the point and tell you what you want to know (and nothing else).</p>
                    </div>
                    <div className={styles.set2}>
                        <h3 id='headCont' className={styles.head2}>Old habits are hard to break.</h3>
                        <p id='paraCont' className={styles.para3}>And bad behaviors die hard. Fortunately, we give you great, science-
                        backed techniques to use.</p>
                    </div>
                    <div className={styles.set3}>
                        <h3 id='headCont' className={styles.head3}>You and your motivation don't have a
                        long-term relationship.</h3>
                        <p id='paraCont' className={styles.para4}>Luckily, we can proactively prepare you for the marathon, not just the
                        race.Effective, memorable exerciseswill help you stick to your goals.</p>
                    </div>
                    <div className={styles.set3}>
                        <h3 id='headCont' className={styles.head4}>Books just don't offer practical solutions.</h3>
                        <p id='paraCont' className={styles.para5}>Rememher when vnu lermed to rirle a hike iust hv rendinn? Yenh. we dnn’t either</p>
                    </div>
                </div>
            </div>
      </div>
      <div className={styles.cont}>
      <h3 id='h3Cont'>Be the best you
      with EQ</h3>
      <p id='pCont'>Not having your own emotions under control might be holding you back.</p>
      <p id='pCont'>Additionally, not understanding those of others stops you from being parent, friend you can be.</p>
    </div>
    </section>
  )
}

export default Self
