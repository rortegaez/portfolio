import Image from "next/image";
import style from "./header.module.css";

import { icons } from "@/app/logic/elements/icons";

export default function Header() {
  return (
    <div className={style.mainHeader}>
      <h1 className={style.textTitle}> Raúl Ortega</h1>
      <div className={style.containerImage}>
        {icons.map((item, index) => (
          <Image
            key={index}
            src={item.img}
            alt={item.name}
            width={60}
            height={60}
            className={style.img}
          />
        ))}
      </div>
    </div>
  );
}
