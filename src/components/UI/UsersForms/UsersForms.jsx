/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable spaced-comment */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";
import FormStore from "../../../stores/FormStore";
import "./UsersForms.scss";
import useBitraScript from "../../../utils/hooks/useBitraScript";
import { Helmet } from "react-helmet";

function UsersForms({ usersFormsType, usersFormsContent, size }) {
  const [addForm, setAddForm] = useState();

  /////close functioality///////
  const handleCloseUsersForms = () => {
    FormStore.setClosed();
  };
  useEffect(() => {
    function onKeyDown(evt) {
      if (evt.key === "Escape") {
        handleCloseUsersForms();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);
  const bitraForm = useBitraScript("https://cdn-ru.bitrix24.ru/b27062060/crm/forms/loader_28.js");
  useEffect(() => {
    setAddForm(bitraForm);
  }, [usersFormsContent]);
  // useEffect(() => {
  //   if (usersFormsType === "feddback") {
  //     const script = document.createElement("script");
  //     script.setAttribute("data-b24-forms", "inline/28/zo9fqm");
  //     script.setAttribute("data-skip-moving", "true");
  //     script.async = true;
  //     script.src = "https://cdn-ru.bitrix24.ru/b27062060/crm/forms/loader_28.js";
  //     script.text = `
  //         (function(w,d,u){
  //           var s=d.createElement('script');
  //           s.async=true;s.src=u+'?'+(Date.now()/180000|0);
  //           var h=d.getElementsByTagName('script')[0];
  //           h.parentNode.insertBefore(s,h);})
  //           (window,document,'https://cdn-ru.bitrix24.ru/b27062060/crm/form/loader_28.js');
  //       `;

  //     console.log(script);
  //     document.body.appendChild(script);
  //   }
  // }, [usersFormsType]);
  ///////
  return (
    <div className="users-forms__shadow" onClick={handleCloseUsersForms}>
      <section className="users-forms">
        <button
          type="button"
          className="users-forms__close"
          aria-label="Close forms"
          onClick={handleCloseUsersForms}
        />
        {/* <Helmet>
          <script
            data-b24-form="inline/28/zo9fqm"
            data-skip-moving="true"
            src={script}
            type="text/javascript"
          />
        </Helmet> */}
        <div>{addForm}</div>
      </section>
    </div>
  );
}

export default UsersForms;
