import { ContactInfo } from "./components/contactInfo"
import { FormContact } from "./components/FormContact"
import { MapFrame } from "./components/mapFrame"
import { PortadaContact } from "./components/portadaContact"

export default function Contacto() {

  return (
    <div className="flex min-h-screen flex-col mb-5 items-center justify-between">
      <PortadaContact />

      <div className="flex flex-col bg-transparent ">
        <ContactInfo />
        
        <FormContact />

        <MapFrame />

      </div>

    </div>
  )
}
