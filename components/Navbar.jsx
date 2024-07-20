"use client"

import Image from "next/image"
import styles from './Navbar.module.css'

const Navbar = () => {
const scrollToTop = () =>{
  window.scrollTo({
    top:0,
    behavior:"smooth",
  })
}
 
  return (
    <nav className={styles.navbar} >
      <Image onClick={scrollToTop} className={styles.navlogo} src='/assets/Image.png' alt='logo' width={50} height={50} />
      <ul className={styles.ul}>
        <li>Emotions</li>
        <li>Manifesto</li>
        <li>Self-awareness test</li>
        <li>Work With Us</li>
      </ul>
      <button className={styles.btn} >Download App</button>
      <Image src='/assets/Hamburger.png' alt='Hamburger Menu' width={72} height={72} className={styles.mobMenu} />
    </nav>
  )
}

export default Navbar
