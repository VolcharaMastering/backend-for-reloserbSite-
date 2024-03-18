import { Helmet } from "react-helmet";

function Layout({ children, title, description, keywords, seoName, seoContent }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {seoName && <meta name={seoName} content={seoContent} />}
      </Helmet>
      {children}
    </>
  );
}

export default Layout;
