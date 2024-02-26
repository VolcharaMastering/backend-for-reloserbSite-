import { useResize } from "../../utils/hooks/useResize";
import "./LangPage.scss";

function LangPage() {
  const screenSize = useResize();

  return (
    <section className={`lang-page ${screenSize.trakResolutionValue}`}>
      <h1 className={`title ${screenSize.trakResolutionValue}`}></h1>
    </section>
  );
}
export default LangPage;
