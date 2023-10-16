import Project from "./Project";
import Certificate from "./Certificate";
import "../globals.css";

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
      <Project />
      <section className="line">
        <p></p>
      </section>
      <Certificate />
    </div>
  );
}
