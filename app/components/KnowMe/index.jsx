import Image from "next/image";
import Link from "next/link";
import style from "./knowme.module.css";
import { certificates } from "@/app/logic/elements/certificates";
import { rrss } from "@/app/logic/elements/rrss";

export default function KnowMe() {
  return (
    <div className={style.mainKnowMe}>
      <section className={style.containerPaperText}>
        <h2 className={style.titleText}>Quien soy</h2>
        <div className={style.containerText}>
          <div className={style.text}>
            <p>
              Después de 18 años, trabajando en unas grandes superficie en la
              venta personalizada. He decidido dejarlo todo para buscar mi
              camino en la programación, queriendo llevar a este nuevo entorno
              mi experiencia trabajando en equipo y organizando proyecto y
              técnicos para que todo llegue a su fin en en las fechas indicadas.
              Comenzando por Full Stack en desarrollo web, pero con una
              formación continuada en un sector siempre cambiante y apasionante.
            </p>
          </div>
          {/* <div className={style.containerCV}>
            <Link href="/images/cv">
              <Image
                src="/RaulOrtegaCV.png"
                width={150}
                height={220}
                alt="Curriculum Vitae"
                className={style.img}
              />
            </Link>
            <h4 className={style.titleCV}>Curriculum</h4>
          </div> */}
        </div>
      </section>
      <section className={style.line}>
        <p></p>
      </section>
      <section className={style.containerDocs}>
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
      <section className={style.line}>
        <p></p>
      </section>
      <section className={style.containerRrss}>
        {rrss.map((item) => (
          <Link href={item.web} target="_blank" rel="noopener noreferrer">
            <Image
              src={item.route}
              width={40}
              height={40}
              alt={item.alt}
              className={style.iconsRrss}
            />
          </Link>
        ))}
      </section>
    </div>
  );
}
