import Image from "next/image";

import "../imagesGlobals.css";
import BtnBack from "@/app/buttons/BtnBack";

export default function Curriculum() {
  return (
    <div className="containerCertificate">
      <BtnBack />
      <div className="content">
        <h1 className="mainTitle">Curriculum Vitae</h1>
        <div className="certificateImg">
          <Image
            src="/RaulOrtegaCV.png"
            width={600}
            height={800}
            alt="Curriculum Vitae"
          />
        </div>
      </div>
      <BtnBack />
    </div>
  );
}
