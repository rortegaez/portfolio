import Image from "next/image";
import "../globals.css";

import { icons } from "@/app/logic/elements/icons";

export default function Header() {
  return (
    <div className="mainHeader">
      <h1 className="textTitle"> Raúl Ortega</h1>
      <div className="containerImage">
        {icons.map((item, index) => (
          <Image
            key={index}
            src={item.img}
            alt={item.name}
            width={60}
            height={60}
            className="imgHeader"
          />
        ))}
      </div>
    </div>
  );
}
