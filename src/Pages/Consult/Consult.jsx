import "./Consult.scss";
import { titles } from "../../content/titles.json";
import { title, description } from "../../content/metaInfo.json";
import Layout from "../../components/Layout/Layout";
import PhotoBlock from "../../components/PhotoBlock/PhotoBlock";
import BlockWithPhotoAndDesc from "../../components/BlockWithPhotoAndDesc/BlockWithPhotoAndDesc";
import buisnessPhoto from "../../assets/consult-temp-buisness.jpg";
import workPhoto from "../../assets/consult-temp-work.jpg";
import { useResize } from "../../utils/hooks/useResize";
import { about, offers, staff } from "../../content/pagesContent/consultPageContent.json";
import generateRandomKey from "../../utils/keyGenerator";
import InfoCard from "../../components/UI/InfoCard/InfoCard";

function Consult() {
  const getRandomKey = () => {
    const index = generateRandomKey();
    return index;
  };
  const screenSize = useResize();
  return (
    <Layout title={title.consult} description={description.consult}>
      <section className="consult">
        <h1 className={`title ${screenSize.trakResolutionValue}`}>{titles.consultTitle}</h1>
        <PhotoBlock
          blockTitle="Лучший сотрудник"
          images={[buisnessPhoto]}
          title={staff.staffName}
          description={staff.staffSkills}
          size={screenSize.trakResolutionValue}
        />
        <BlockWithPhotoAndDesc
          photoLink={workPhoto}
          size={screenSize.trakResolutionValue}
          caption=""
          newsTitle={about.title}
          newsText={about.description}
        />
        <div className="consult__grid-block">
          <h2 className="subtitle">{offers.title}</h2>
          <div className={`consult__grid ${screenSize.trakResolutionValue}`}>
            {offers.description.map((item) => (
              <InfoCard key={getRandomKey()} title={item.title} description={item.description} />
            ))}
            {offers.description.length % 2 && (
              <InfoCard key={getRandomKey()} title="" description="" />
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Consult;
