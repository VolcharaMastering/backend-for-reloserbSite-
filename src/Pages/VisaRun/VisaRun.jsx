import "./VisaRun.scss";
import { titles } from "../../content/titles.json";
import { about, offers, whyWe } from "../../content/pagesContent/visarunPageContent.json";
import BlackBlockWithText from "../../components/BlackBlockWithText/BlackBlockWithText";
import { useResize } from "../../utils/hooks/useResize";

function VisaRun() {
  const screenSize = useResize();
  return (
    <section className="visarun">
      <h1 className="title visarun__title">{titles.visarunTitle}</h1>
      <BlackBlockWithText
        title={about.title}
        description=""
        text={about.description}
        size={screenSize.trakResolutionValue}
      />
    </section>
  );
}

export default VisaRun;
