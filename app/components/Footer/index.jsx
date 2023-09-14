import style from "./footer.module.css";

const fetchDate = () => {
  let today = "";
  const date = new Date();
  today = date.toDateString();
  return today;
};

export default function Footer() {
  return (
    <div className={style.containerFooter}>
      <div className={style.line}>
        <p></p>
      </div>
      <div className={style.text}>
        <p>Raúl Ortega</p>
      </div>
      <div>{fetchDate()}</div>
    </div>
  );
}
