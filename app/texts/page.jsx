import Image from "next/image";
import style from "./texts.module.css";

export default function texts() {
  return (
    <div>
      <Image
        src="./cerficadoNuclio.png"
        width={600}
        height={400}
        alt="Certificado Full Stack Web por Nuclio"
      />
    </div>
  );
}
