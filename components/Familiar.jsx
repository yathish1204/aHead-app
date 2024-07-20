"use client"

import Image from 'next/image'
import styles from './Familiar.module.css'
import { gsap } from 'gsap';
import  ScrollTrigger  from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const Familiar = () => {

    useGSAP(()=>{
        gsap.to('#scroller',{
            transform:"translate(-150%)",
            scrollTrigger:{
                trigger:"#familiar",
                start:'top 25%',
                scrub:2,
                pin:true,
                end:"top -180%"
                }
            })
        
        const tl = gsap.timeline();
        tl.from('#g2nd',{
            y:30,
            x:200,
            rotate:-50,
            start:0,
            ease:'ease.inOut',
            scrollTrigger:{
                trigger:"#g2nd",
                scroller:"body",
                // markers:true,
                start:'top 90%',
                end:'top -150%',
                scrub:2,
                }
        })
        tl.from('#fh2',{
            y:-40,
            start:0,
            ease:'ease.inOut',
            scrollTrigger:{
                trigger:"#fh2",
                scroller:"body",
                // markers:true,
                start:'top 90%',
                end:'top -150%',
                scrub:2,
                }
        })

        // tl.from('#inner',{
        //     start:0,
        //     scrollTrigger:{
        //         trigger:"#inner",
        //         scroller:"body",
        //         // markers:true,
        //         start:'top 20%',
        //         end:'top -130%',
        //         scrub:1.5,
        //         pin:true,
        //         }
        // })
    },[])


  return (
    <section id='familiar' className={styles.familiar}>
      <div className={styles.inner} id='inner'>
        <div className={styles.header} >
            <h2 id='fh2' className={styles.h2} >Does this sound familiar...</h2>
            <Image id='g2nd' src='/assets/G2nd.png' width={59} height={75}  alt='ghost' className={styles.ghost2nd} />
        </div>
        <div id='scroller' className={styles.scroller}  >
            <Image src='/assets/1.png' alt='card' width={288} height={264}  className={styles.img}  />
            <Image src='/assets/2.png' alt='card' width={388} height={264}  className={styles.img}  />
            <Image src='/assets/3.png' alt='card' width={388} height={264}  className={styles.img}  />
            <Image src='/assets/4.png' alt='card' width={388} height={264}  className={styles.img}  />
            <Image src='/assets/5.png' alt='card' width={388} height={264}  className={styles.img}  />
            <Image src='/assets/6.png' alt='card' width={388} height={264}  className={styles.img}  />
            <Image src='/assets/7.png' alt='card' width={388} height={264}  className={styles.img}  />
            <Image src='/assets/8.png' alt='card' width={388} height={264}  className={styles.img}  />
            <Image src='/assets/9.png' alt='card' width={388} height={264}  className={styles.img}  />
        </div>
      </div>

      
    </section>
  )
}

export default Familiar
