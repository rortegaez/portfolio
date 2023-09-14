import BtnBack from "@/app/buttons/BtnBack";
import Image from "next/image";

import "../imagesGlobals.css";

export default function Nuclio() {
  return (
    <div className="containerCertificate">
      <BtnBack />
      <div className="content">
        <h1 className="mainTitle">Certificado de Nuclio Digital School</h1>
        <div className="certificateImg">
          <Image
            src="/certificadoNuclio.png"
            width={914}
            height={648}
            alt="Certificado Nuclio Digital School"
          />
        </div>
      </div>
      <BtnBack />
    </div>
  );
}
