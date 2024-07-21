"use client"

import Image from 'next/image'
import styles from './Meet.module.css'
import { gsap } from 'gsap';
import  ScrollTrigger  from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const Meet = () => {
useGSAP(()=>{
  const tl = gsap.timeline();
  tl.from('#obg',{
      y:120,
      x:300,
      duration:0.4,
      scrollTrigger:{
        trigger:"#obg",
        scroller:"body",
        scrub:1,
        start:"top 100%",
        end:"top 25%",
      }
  })
  tl.from('#gPurple',{
      rotate:24,
      duration:0.45,
      ease:'expo.in',
      start:0,
      scrollTrigger:{
        trigger:"#gPurple",
        scroller:"body",
        start:"top 100%",
        end:'top 60%',
        scrub:true,
        toggleActions:"play none none none"
      }
  })
  tl.from('#grade',{
      y:100,
      duration:0.5,
      start:0,
      ease:"elastic.out(1,0.3)",
      scrollTrigger:{
        trigger:"#gPurple",
        scroller:"body",
        start:"top 70%",
        scrub:true,
        end:'top 50%'
      }
  })
  tl.from('#heading',{
      x:-40,
      opacity:0,
      start:0,
      duration:0.5,
      scrollTrigger:{
        trigger:"#heading",
        scroller:"body",
        start:"top 100%",
        scrub:true,
        end:"top 50%"
      }
  })
  tl.from('#para',{
      y:40,
      opacity:0,
      duration:0.4,
      scrollTrigger:{
        trigger:"#para",
        scroller:"body",
        start:"top 100%",
        scrub:true,
        end:"top 60%"
      }
  })
  tl.from('#para1',{
      x:40,
      opacity:0,
      stagger:0.4,
      duration:0.5,
      scrollTrigger:{
        trigger:"#para1",
        scroller:"body",
        start:"top 100%",
        scrub:true,
        end:"top 50%",
      }
  })
  tl.to('#leaf3',{
      x:-40,
      y:300,
      rotate:720,
      scrollTrigger:{
        trigger:"#leaf3",
        scroller:"body",
        scrub:1,
        start:"top 100%",
      }
  })
  tl.to('#leaf4',{
      x:40,
      y:200,
      rotate:1020,
      scrollTrigger:{
        trigger:"#leaf4",
        scroller:"body",
        scrub:1,
        start:"top 100%",
      }
  })
  tl.from('#seed2',{
      x:-80,
      y:140,
      scale:1.4,
      scrollTrigger:{
        trigger:"#seed2",
        scroller:"body",
        scrub:1,
        start:"top 100%",
      }
  })
  tl.to('#flower2',{
      x:-140,
      y:-140,
      scale:0.8,
      scrollTrigger:{
        trigger:"#flower2",
        scroller:"body",
        scrub:1,
        start:"top 100%",
      }
  })
 

})

  return (
    <section id='meet'>
      <div className={styles.bg2}>
        <div className={styles.right}>
            <p id='para' className={styles.p}>Built out of frustration</p>
            <h2 id='heading' className={styles.h2}>Meet the ahead app</h2>
            <Image id='obg'  src='/assets/obg.png' width={100} height={100} className={styles.obg} />
            <div className={styles.gradePop}>
              <Image id='pbg'  src='/assets/pbg.png' width={60} height={60} className={styles.pbg} />
              <Image id='gPurple'  src='/assets/GhostPurple.png' width={100} height={100} className={styles.gPurple} />
              <Image id='grade'  src='/assets/Grade.png' width={60} height={60} className={styles.grade} />
            </div>
        </div>
        <div  className={styles.left}>
                      <p id='para1' className={styles.p1}>A personalized pocket coach that provides bite-
          sized, science-driven tools to boost emotional
          intelligence.</p>
          <p id='para1' className={styles.p1}>Think of it as a pocket cheerleader towards a
          better, more fulfilling.</p>
        </div>
        <Image  id='gsetImage' src='/assets/ghostSet.png' width={217} height={241} alt='ghost gradeset' className={styles.ghostSet} />
        <Image  id='seed2' src='/assets/seed.png' width={20} height={20} alt='confetti' className={styles.seed} />
      <Image id='flower2' src='/assets/flower.png' width={40} height={40} alt='confetti' className={styles.flower} />
      <Image id='leaf3' src='/assets/leaf.png' width={70} height={70} alt='confetti' className={styles.leaf} />
      <Image id='leaf4' src='/assets/leaf.png' width={70} height={70} alt='confetti' className={styles.leaf1} />
      </div>
    </section>
  )
}

export default Meet

