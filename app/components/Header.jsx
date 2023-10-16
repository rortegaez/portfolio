import Image from "next/image";
import "../globals.css";

import Rrss from "./Rrss";
import { icons } from "@/app/logic/elements/icons";

export default function Header() {
  return (
    <div className="mainHeader">
      <Rrss />
      <header className="containerTextTitle">
        <h1 className="textTitle"> Raúl Ortega</h1>
      </header>
      <div className="containerImage">
        {icons.map((item, index) => (
          <Image
            className="img"
            key={index}
            src={item.img}
            alt={item.name}
            width={60}
            height={60}
          />
        ))}
      </div>
    </div>
  );
}
