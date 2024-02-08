import "./VisaRun.scss";
import { titles } from "../../content/titles.json";

function VisaRun() {
  return (
    <section className="visarun">
      <h1 className="title visarun__title">{titles.visarunTitle}</h1>
    </section>
  );
}

export default VisaRun;
