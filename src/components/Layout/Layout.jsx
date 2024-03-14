import { Helmet } from "react-helmet";
import { ogData } from "../../content/metaInfo.json";

function Layout({ children, title, description, seoName, seoContent, page, ogImage }) {
  console.log(ogData);
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {seoName && <meta name={seoName} content={seoContent} />}
        <meta property="og:title" content={ogData.ogTitle[page]} />
        <meta property="og:description" content={ogData.ogDescription[page]} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={ogData.ogUrl[page]} />
        <meta property="og:type" content="website" />
      </Helmet>
      {children}
    </>
  );
}

export default Layout;
