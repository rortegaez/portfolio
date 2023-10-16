import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/logic/elements/projects";

import "../globals.css";

export default function Project() {
  return (
    <div className="containerProject">
      <h1 className="titleProject">Proyectos</h1>
      <div className="containerProjects">
        {projects.map((item, index) => (
          <Link href={item.url} key={index}>
            <section className="imgs">
              <Image
                src={item.img}
                width={200}
                height={120}
                alt={item.alt}
                className="imgProject"
              />
            </section>
          </Link>
        ))}
      </div>
    </div>
  );
}
