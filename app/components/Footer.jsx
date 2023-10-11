import "../globals.css";

const fetchDate = () => {
  let today = "";
  const date = new Date();
  today = date.toDateString();
  return today;
};

export default function Footer() {
  return (
    <div className="containerFooter">
      <div className="line">
        <p></p>
      </div>
      <div className="text">
        <p>Raúl Ortega</p>
      </div>
      <div>{fetchDate()}</div>
    </div>
  );
}
