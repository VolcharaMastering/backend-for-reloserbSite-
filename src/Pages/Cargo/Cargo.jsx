import "./Cargo.scss";
import { titles } from "../../content/titles.json";

function Cargo() {
  return (
    <section className="cargo">
      <h1 className="title">{titles.cargoTitle}</h1>
    </section>
  );
}

export default Cargo;
