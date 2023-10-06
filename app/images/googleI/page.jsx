import BtnBack from "@/app/buttons/BtnBack";
import Image from "next/image";

import "../imagesGlobals.css";

export default function Nuclio() {
  return (
    <div className="containerCertificate">
      <BtnBack />
      <div className="content">
        <h1 className="mainTitle">Certificado de Google/Coursera</h1>
        <div className="certificateImg">
          <Image
            src="/certificados/aspectosbasicos.png"
            width={914}
            height={648}
            alt="Certificado Google. Aspectos básicos: Datos, datos, en todas partes"
          />
        </div>
      </div>
      <BtnBack />
    </div>
  );
}
