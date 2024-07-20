"use client"

import Image from 'next/image'
import styles from './Withus.module.css'
import { gsap } from 'gsap';
import  ScrollTrigger  from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const Withus = () => {
    useGSAP(()=>{
        const tl = gsap.timeline();
        tl.from('#ush2',{
            x:-60,
            opacity:0,
            duration:0.4,
            scrollTrigger:{
              trigger:"#ush2",
              scroller:"body",
              scrub:1,
              start:"top 100%",
              end:"top 70%",
            }
        })
        tl.from('#ush4',{
            x:60,
            opacity:0,
            duration:0.4,
            scrollTrigger:{
              trigger:"#ush4",
              scroller:"body",
              scrub:1,
              start:"top 100%",
              end:"top 70%",
            }
        })
        // tl.to(containerRight,{
            
        //     scrollTrigger:{
        //       trigger:"#withus",
        //       scrub:1,
        //       pin:true,
        //       end:"+=3000",
        //     }
        // })

        tl.to('#containerRight',{
            transform:"translateY(-80%)",
            scrollTrigger:{
                trigger:"#withus",
                start:'top -10%',
                scrub:2,
                pin:true,
                end:"top -80%"
                }
            })

            // gsap.from('#gPurpleWith',{
            //     x:-15,
            //     yoyo:true,
            //     ease:'back.inOut',
            //     duration:0.2,
            //     scrollTrigger:{
            //         trigger:"#gPurpleWith",
            //         start:'top 70%',
            //         scrub:2,
            //         pin:true,
            //         end:"top 40%"
            //         }
            //     })
    
        



    },[])

  return (
    <section id='withus'>
        <div className={styles.with}>
            <div className={styles.h2h4}>
                <h2 id='ush2' className={styles.ush2}>Work with us</h2>
                <h4 id='ush4' className={styles.ush4}>ahead</h4>
            </div>
            <div id='wrapper' className={styles.wrapper}>
                <div className={styles.left}>
                        <div className={styles.leftIn}>
                            <Image id='gPurpleWith'  src='/assets/GhostPurple.png' width={46} height={55} className={styles.gPurple} />
                            <h3 className={styles.about}>About</h3>
                            <p className={styles.abPara}>At ahead our goal is to make self- improvement fun and lasting. We know there&apos;s a way how to make it work. And that's what aHead is all about!</p>
                        </div>
                        <div className={styles.innerLeft}>
                        <h3 className={styles.withlh4}>Product</h3>
                        <p className={styles.withlp}>Sure, yyou could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did...</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <div id='containerRight' className={styles.containerRight}>
                        <div className={styles.scrollCard}>
                            <h4 className={styles.withrh4}>Power through, even when the going gets tough</h4>
                            <p className={styles.withrp}>We help you spot and work around whotever stonds in the woy, be it bod hobits, feors, etc.</p>
                        </div>
                        <div className={styles.scrollCard}>
                            <h4 className={styles.withrh4}>Learn more about who you are and where you want to go</h4>
                            <p className={styles.withrp}>We osk the right questions to help you better understond why you do things the woy you do.</p>
                        </div>
                        <div className={styles.scrollCard}>
                            <h4 className={styles.withrh4}>Play and grow together with others on the same journey</h4>
                            <p className={styles.withrp}>Aheod feels like a gome, not like o chore.See yourself grow every day towcrdsachieving your goolsl</p>
                        </div>
                        <div className={styles.scrollCard}>
                            <h4 className={styles.withrh4}>Learn more about who you are and where you want to go</h4>
                            <p className={styles.withrp}>We osk the right questions to help you better understond why you do things the woy you do.</p>
                        </div>
                        <div className={styles.scrollCard}>
                            <h4 className={styles.withrh4}>Play and grow together with others on the same journey</h4>
                            <p className={styles.withrp}>Aheod feels like a gome, not like o chore.See yourself grow every day towcrdsachieving your goolsl</p>
                        </div>
                      
                        
                       
                    </div>
                    
                </div>
                {/* <div className={styles.progress}>
                    <Image id='track'  src='/assets/track.png' width={7} height={570} className={styles.track} />
                    <Image id='thumb'  src='/assets/thumb.png' width={7} height={125} className={styles.thumb} />
                </div> */}
            </div>
        </div>
    </section>
  )
}

export default Withus
