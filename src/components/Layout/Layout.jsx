import { Helmet } from "react-helmet";
import { title, description, keywords } from "../../content/metaInfo.json";

function Layout({ children, page, seoName, seoContent }) {
  return (
    <>
      <Helmet>
        <title>{title[page]}</title>
        <meta name="description" content={description[page]} />
        <meta name="keywords" content={keywords[page]} />
        {seoName && <meta name={seoName} content={seoContent} />}
      </Helmet>
      {children}
    </>
  );
}

export default Layout;
