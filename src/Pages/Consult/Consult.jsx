import "./Consult.scss";
import { titles } from "../../content/titles.json";
import { title, description } from "../../content/metaInfo.json";
import Layout from "../../components/Layout/Layout";
import PhotoBlock from "../../components/PhotoBlock/PhotoBlock";

function Consult() {
  return (
    <Layout title={title.consult} description={description.consult}>
      <section className="consult">
        <h1 className="title">{titles.consultTitle}</h1>
        <PhotoBlock />
      </section>
    </Layout>
  );
}

export default Consult;
