import Image from "next/image";
import style from "./header.module.css";

export default function Header() {
  return (
    <div className={style.mainHeader}>
      <h1 className={style.textTitle}>Raúl Ortega</h1>
      <div className={style.containerImage}>
        <Image
          className={style.img}
          src="/html240.png"
          width={60}
          height={60}
          alt="Icon HTML"
        />
        <Image
          className={style.img}
          src="/css3-240.png"
          width={60}
          height={60}
          alt="Icon css3"
        />
        <Image
          className={style.img}
          src="/javascript240.png"
          width={60}
          height={60}
          alt="Icon JavaScript"
        />
        <Image
          className={style.img}
          src="/react80.png"
          width={60}
          height={60}
          alt="Icon React"
        />
        <Image
          className={style.img}
          src="/nodejs240.png"
          width={60}
          height={60}
          alt="Icon Node"
        />
        <Image
          className={style.img}
          src="/nextjs240.png"
          width={60}
          height={60}
          alt="Icon ReactJs"
        />
      </div>
    </div>
  );
}
