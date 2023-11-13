"use client";

import Image from "next/image";
import { useEffect } from "react";
import { checkPosition } from "../../logic/function/checkPosition.js";

import BtnBack from "../../buttons/BtnBack";

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
            src="/certificados/preparar.png"
            width={914}
            height={648}
            alt="Certificado Google. Preparar datos para la exploración"
            className="photoCertificate"
          />
        </div>
      </div>
      <BtnBack />
    </div>
  );
}
