import { useResize } from "../../utils/hooks/useResize";
import BlockWithPhotoAndDesc from "../../components/BlockWithPhotoAndDesc/BlockWithPhotoAndDesc";
import OkBlock from "../../components/OkBlock/OkBlock";
import Layout from "../../components/Layout/Layout";
import "./LangPage.scss";
import { about, offers, whyWe } from "../../content/pagesContent/langPageContent.json";
import { title, description } from "../../content/metaInfo.json";
import { titles } from "../../content/titles.json";
import photoLink from "../../assets/lang-photo.png";

function LangPage() {
  const screenSize = useResize();

  return (
    <Layout title={title.lang} description={description.lang}>
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
    </Layout>
  );
}
export default LangPage;
