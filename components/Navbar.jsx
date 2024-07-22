"use client"

import Image from "next/image"
import {useState} from 'react'
import Link from "next/link"
import styles from './Navbar.module.css'

const Navbar = () => {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  }

const scrollToTop = () =>{
  window.scrollTo({
    top:0,
    behavior:"smooth",
  })
}
 
  return (
      <>
        <nav >
        <div className={styles.navbar} >
          <Image onClick={scrollToTop} className={styles.navlogo} src='/assets/Image.png' alt='logo' width={50} height={50} />
          <ul className={styles.ul}>
            <li ><Link className={styles.link} href='#familiar'>Emotions</Link></li>
            <li ><Link className={styles.link} href='#meet'>Manifesto</Link></li>
            <li ><Link className={styles.link} href='#self'>Self-awareness test</Link></li>
            <li ><Link className={styles.link} href='#withus' >Work With Us</Link></li>
          </ul>
          <button className={styles.btn} >Download App</button>
          {sidebar ? 
          <Image src='/assets/Close.png' alt='Close Menu' width={66} height={66} className={styles.mobMenu} onClick={showSidebar} />:
          <Image src='/assets/Hamburger.png' alt='Hamburger Menu' width={72} height={72} className={styles.mobMenu} onClick={showSidebar} />}

        </div>
   
        {sidebar && <div className={styles.sidebar}>
          <ul className={styles.ul}>
              <li  onClick={showSidebar}><Link className={styles.link} href='#familiar'>Emotions</Link></li>
              <li  onClick={showSidebar}><Link className={styles.link} href='#meet'>Manifesto</Link></li>
              <li  onClick={showSidebar}><Link className={styles.link} href='#self'>Self-awareness test</Link></li>
              <li  onClick={showSidebar}><Link className={styles.link} href='#withus' >Work With Us</Link></li>
              <button onClick={showSidebar} className={styles.btn} >Download App</button>
            </ul>
        </div>}
      </nav>
      </>
  ) 
}

export default Navbar
