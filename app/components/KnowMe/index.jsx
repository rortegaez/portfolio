import Image from "next/image";
import style from "./knowme.module.css";

export default function KnowMe() {
  return (
    <div className={style.mainKnowMe}>
      <h1 className={style.title}>Este soy yo</h1>
      <section className={style.containerPaperText}>
        <div className={style.containerPaper}>
          <Image
            src="/certificadoNuclio.png"
            width={200}
            height={150}
            alt="Certificado Nuclio"
          />
        </div>
        <div className={style.line}>
          <p></p>
        </div>
        <div className={style.containerText}>
          <p className={style.text}>
            Después de 18 años, trabajando en unas grandes superficie en la
            venta personalizada. He decidido dejarlo todo para buscar mi camino
            en la programación, queriendo llevar a este nuevo entorno mi
            experiencia trabajando en equipo y organizando proyecto y técnicos
            para que todo llegue a su fin en en las fechas indicadas. Comenzando
            por Full Stack en desarrollo web, pero con una formación continuada
            en un sector siempre cambiante y apasionante.
          </p>
        </div>
      </section>
    </div>
  );
}
