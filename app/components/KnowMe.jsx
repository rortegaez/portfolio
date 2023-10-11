import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import { certificates } from "@/app/logic/elements/certificates";
import { rrss } from "@/app/logic/elements/rrss";

export default function KnowMe() {
  return (
    <div className="mainKnowMe">
      <section className="containerPaperText">
        <h2 className="titleText">Quien soy</h2>
        <div className="containerText">
          <div className="text">
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
        </div>
      </section>
      <section className="line">
        <p></p>
      </section>
      <section className="containerDocs">
        <div className="containerPaper">
          {certificates.map((item) => (
            <Link href={`/images/${item.name}`}>
              <Image
                src={item.route}
                width={200}
                height={150}
                alt={item.alt}
                className="imgKnow"
              />
            </Link>
          ))}
        </div>
      </section>
      <section className="line">
        <p></p>
      </section>
      <section className="containerRrss">
        {rrss.map((item) => (
          <Link href={item.web} target="_blank" rel="noopener noreferrer">
            <Image
              src={item.route}
              width={40}
              height={40}
              alt={item.alt}
              className="iconsRrss"
            />
          </Link>
        ))}
      </section>
    </div>
  );
}
