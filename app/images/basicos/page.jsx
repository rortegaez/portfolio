"use client";

import { useEffect } from "react";
import { checkPosition } from "../../logic/function/checkPosition.js";

import BtnBack from "../../buttons/BtnBack";
import Image from "next/image";

import "../../globals.css";

export default function Nuclio() {
  useEffect(() => {
    const handleCheckPosition = () => {
      checkPosition();
    };

    document.addEventListener("DOMContentLoaded", handleCheckPosition);

    return () => {
      document.removeEventListener("DOMContentLoaded", handleCheckPosition);
    };
  }, []);

  return (
    <div className="containerCertificate">
      <BtnBack />
      <div className="content">
        <h1 className="mainTitle">Certificado de Google/Coursera</h1>
        <div className="certificateImg">
          <Image
            src="/certificados/basicos.png"
            width={914}
            height={648}
            alt="Certificado Google. Aspectos básicos: Datos, datos, en todas partes"
            className="photoCertificate"
          />
        </div>
      </div>
      <BtnBack />
    </div>
  );
}
