import Link from "next/link";

import "../globals.css";

export default function BtnBack() {
  return (
    <div className="containerBtn">
      <button className="btn">
        <Link href="/">Back</Link>
      </button>
    </div>
  );
}
