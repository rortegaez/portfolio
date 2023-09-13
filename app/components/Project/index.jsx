import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/logic/elements/projects";

import style from "./project.module.css";

export default function Project() {
  return (
    <div className={style.containerProject}>
      <h1 className={style.titleProject}>Project</h1>
      <div className={style.containerProjects}>
        {projects.map((item, index) => (
          <Link href={item.url} key={index}>
            <Image src={item.img} width={200} height={120} alt={item.alt} />
          </Link>
        ))}
      </div>
    </div>
  );
}
