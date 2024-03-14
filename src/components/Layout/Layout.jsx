import { Helmet } from "react-helmet";
import { ogData } from "../../content/metaInfo.json";

function Layout({ children, title, description, seoName, seoContent, page, ogImage }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={`${ogData.ogTitle[page]}`} />
        <meta name="description" content={description} />
        <meta property="og:description" content={`${ogData.ogDescription[page]}`} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={`${ogData.ogUrl[page]}`} />
        <meta property="og:type" content="website" />
        {seoName && <meta name={seoName} content={seoContent} />}
      </Helmet>
      {children}
    </>
  );
}

export default Layout;
