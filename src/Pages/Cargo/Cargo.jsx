import "./Cargo.scss";
import { titles } from "../../content/titles.json";
import Layout from "../../components/Layout/Layout";
import { title, description } from "../../content/metaInfo.json";

function Cargo() {
  return (
    <Layout title={title.cargo} description={description.cargo}>
      <section className="cargo">
        <h1 className="title">{titles.cargoTitle}</h1>
      </section>
    </Layout>
  );
}

export default Cargo;
