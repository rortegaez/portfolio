import Image from "next/image";
import Link from "next/link";

import { rrss } from "@/app/logic/elements/rrss";

export default function Rrss() {
  return (
    <div className="containerRrss">
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
    </div>
  );
}
