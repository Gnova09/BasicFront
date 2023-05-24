import { DivisorSection } from "../../components/home/divisorSection"
import { Historysection } from "./components/historySection"
import { MissionSection } from "./components/missionSection"
import { Portada } from "./components/portada"
import { ValoresSection } from "./components/valoresSection"

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Portada />
      <Historysection />
      <MissionSection />
      <DivisorSection />
      <ValoresSection />
      <div class="w-full h-4 flex flex-row ">
        <span class="w-1/3 bg-blue-200"></span>
        <span class="w-1/3 bg-blue-600"></span>
        <span class="w-1/3 bg-blue-800"></span>
      </div>
    </main>
  )
}
