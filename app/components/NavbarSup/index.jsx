import { navbar } from "../../logic/elements/navbar";

import style from "./navbarSup.module.css";

export default function NavbarSup() {
  return (
    <div>
      <div className={style.mainNav}>
        {navbar.map((element, index) => (
          <button className={style.name} key={index}>
            {element.name}
          </button>
        ))}
      </div>
    </div>
  );
}
