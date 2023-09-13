import Image from "next/image";

import "../imagesGlobals.css";

export default function Curriculum() {
  return (
    <div className="containerCertificate">
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
  );
}
