
import React from "react";
import { Carrousel } from "./components/home/carrousel";
import { AboutSection } from "./components/home/aboutSection";
import { DivisorSection } from "./components/home/divisorSection";
import { ServiciosSection } from "./components/home/serviciosSection";
import { MisionSection } from "./components/home/misionSection";
import { MapFrame } from "./components/home/mapFrame";
import { Contacto } from "./components/home/contacto";


export default function Home() {
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className=" pt-20 w-full flex items-center">
        <Carrousel />
      </div>
      <AboutSection />
      <DivisorSection />
      <ServiciosSection />
      <MisionSection />
      <DivisorSection />
      <Contacto />
      <MapFrame />
      
    </main>
  )
}
