import { Productos } from "./components/Productos";
import Image from "next/image"
import Ima from "../../assets/CallCentercontactos.jpg"
import Link from "next/link";
import { Portada } from "./components/portada";


export default function Product() {
  return (
    <main className="flex min-h-screen flex-col mb-5 items-center justify-between gap-10">

      <Portada />

      <Productos />
    </main>
  )
}
