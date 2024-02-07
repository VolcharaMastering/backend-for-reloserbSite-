import { Helmet } from "react-helmet";

function Layout({ children, title, description }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      {children}
    </>
  );
}

export default Layout;
