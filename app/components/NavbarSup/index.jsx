import { navbar } from "../../logic/elements/navbar";

import style from "./navbarSup.module.css";

export default function NavbarSup() {
  return (
    <div>
      <div className={style.mainNav}>
        {navbar.map((element) => (
          <button className={style.name}>{element.name}</button>
        ))}
      </div>
    </div>
  );
}
