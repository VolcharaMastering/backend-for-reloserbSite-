import "./RealEstate.scss";
import { titles } from "../../content/titles.json";
import Layout from "../../components/Layout/Layout";
import { title, description } from "../../content/metaInfo.json";

function RealEstate() {
  return (
    <Layout title={title.realEstate} description={description.realEstate}>
      <section>
        <h1 className="title">{titles.realEstateTItle}</h1>
      </section>
    </Layout>
  );
}

export default RealEstate;
