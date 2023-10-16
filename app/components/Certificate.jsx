import Link from "next/link";
import Image from "next/image";
import { certificates } from "@/app/logic/elements/certificates";

import "../globals.css";

export default function Project() {
  return (
    <div className="containerDocs">
      <h2 className="titleCertificate">Certificados</h2>
      <div className="containerPaper">
        {certificates.map((item) => (
          <Link href={`/images/${item.name}`}>
            <section className="imgKnow">
              <Image
                src={item.route}
                width={200}
                height={150}
                alt={item.alt}
                className="img"
              />
            </section>
          </Link>
        ))}
      </div>
    </div>
  );
}
