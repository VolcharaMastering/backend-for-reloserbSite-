import { Helmet } from "react-helmet";

function Layout({ children, title, description, seoName, seoContent }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {seoName && <meta name={seoName} content={seoContent} />}
      </Helmet>
      {children}
    </>
  );
}

export default Layout;
