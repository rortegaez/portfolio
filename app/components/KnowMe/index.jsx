import Image from "next/image";
import Link from "next/link";
import style from "./knowme.module.css";
import { certificates } from "@/app/logic/elements/certificates";

export default function KnowMe() {
  return (
    <div className={style.mainKnowMe}>
      <section className={style.containerPaperText}>
        <h2 className={style.titleText}>Quien soy</h2>
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
        <div className={style.line}>
          <p></p>
        </div>
        <div className={style.containerPaper}>
          {certificates.map((item) => (
            <Link href={`/images/${item.name}`}>
              <Image
                src={item.route}
                width={200}
                height={150}
                alt={item.alt}
                className={style.img}
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
