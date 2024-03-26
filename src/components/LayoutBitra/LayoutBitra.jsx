import { Helmet } from "react-helmet";
import { title, description, keywords } from "../../content/metaInfo.json";

function LayoutBitra({ children, script }) {
  return (
    <>
      <Helmet>
        <body>
          {/* <script
            data-b24-form="inline/28/zo9fqm"
            data-skip-moving="true"
            dangerouslySetInnerHTML={`${script }`}
            /> */}
          <script>{`console.log('Этот скрипт будет добавлен в тег <body>')`}</script>
        </body>
      </Helmet>
      {children}
    </>
  );
}

export default LayoutBitra;
