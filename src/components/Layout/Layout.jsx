import { Helmet } from "react-helmet";
import { ogData } from "../../content/metaInfo.json";

function Layout({ children, title, description, seoName, seoContent, page, ogImage }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:title" content={`${ogData.ogTitle[page]}`} />
        <meta property="og:description" content={`${ogData.ogDescription[page]}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${ogData.ogUrl[page]}`} />
        <meta property="og:site_name" content="ReloSerb. Переезд и легализация в Сербии" />
        <meta property="og:locale" content="ru_RU" />
        {seoName && <meta name={seoName} content={seoContent} />}
      </Helmet>
      {children}
    </>
  );
}

export default Layout;
