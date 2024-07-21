import Image from "next/image"
import {gsap} from 'gsap'
import Hero from "@/components/Hero";
import Familiar from "@/components/Familiar";
import Meet from "@/components/Meet";
import Self from "@/components/Self";
import Wonder from "@/components/Wonder";
import Work from "@/components/Work";
import Footer from "@/components/Footer";
import Vac from "@/components/Vac";
import Withus from "@/components/Withus";
import ParticleAnimation from "@/components/ParticleAnimation";


export default function Home() {

  
  return (
    <section>
      <ParticleAnimation/>
    <Hero/>
    <Familiar/>
    <Meet/>
    <Self />
    <Wonder />
    <Work />
    <Withus/>
    <Vac/>
    <Footer/>
   
    
    </section>

  );
}
