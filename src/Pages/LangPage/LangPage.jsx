import { useResize } from "../../utils/hooks/useResize";
import BlockWithPhotoAndDesc from "../../components/BlockWithPhotoAndDesc/BlockWithPhotoAndDesc";
import "./LangPage.scss";
import { about, offers, whyWe } from "../../content/pagesContent/langPageContent.json";
import { title, description } from "../../content/metaInfo.json";
import { titles } from "../../content/titles.json";
import photoLink from "../../assets/lang-photo.jpg";
import OkBlock from "../../components/OkBlock/OkBlock";

function LangPage() {
  const screenSize = useResize();

  return (
    <section className={`lang-page ${screenSize.trakResolutionValue}`}>
      <h1 className={`title ${screenSize.trakResolutionValue}`}>{titles.langTitle}</h1>
      <BlockWithPhotoAndDesc
        photoLink={photoLink}
        size={screenSize.trakResolutionValue}
        caption=""
        newsTitle={about.title}
        newsText={about.description}
      />
      <OkBlock data={offers} size={screenSize.trakResolutionValue} />
      <OkBlock data={whyWe} size={screenSize.trakResolutionValue} />
    </section>
  );
}
export default LangPage;
