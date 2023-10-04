
import React from "react";
import { Carrousel } from "./components/home/carrousel";
import { AboutSection } from "./components/home/aboutSection";
import { DivisorSection } from "./components/home/divisorSection";
import { ServiciosSection } from "./components/home/serviciosSection";
import { MisionSection } from "./components/home/misionSection";
import { MapFrame } from "./components/home/mapFrame";
import { Contacto } from "./components/home/contacto";
import Image from "next/image";


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className=" bg-gray-100  pt-20 w-full flex items-center justify-between">
        {/* <Carrousel /> */}
        <div>
          <AboutSection />
        </div>
        <Image alt="image" className="w-1/2 animate-fade-in-up" src={require("./assets/img/landing.jpg")} width={"810"} height="540" />
      </div>
      <DivisorSection />
      <ServiciosSection />
      <MisionSection />
      <DivisorSection />
      <Contacto />
      <MapFrame />

    </main>
  )
}
