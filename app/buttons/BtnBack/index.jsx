import Link from "next/link";
import style from "../buttons.module.css";

export default function BtnBack() {
  return (
    <div className={style.containerBtn}>
      <button className={style.btn}>
        <Link href="/">Back</Link>
      </button>
    </div>
  );
}
