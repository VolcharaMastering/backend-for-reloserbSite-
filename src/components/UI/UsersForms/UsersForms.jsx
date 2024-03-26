import { useEffect, useState } from "react";
import FormStore from "../../../stores/FormStore";
import "./UsersForms.scss";
import BitraForm from "../BitraForm/BitraForm";

function UsersForms({ formData, formType, srcToThirdParty, size }) {
  const [addForm, setAddForm] = useState();
  console.log(formType);
  /////close functioality///////
  const handleCloseUsersForms = (evt) => {
    if (
      evt.target.classList.contains("users-forms__shadow") ||
      evt.key === "Escape" ||
      evt.target.classList.contains("users-forms__close")
    ) {
      FormStore.setClosed();
    }
  };
  useEffect(() => {
    function onKeyDown(evt) {
      if (evt.key === "Escape") {
        handleCloseUsersForms(evt);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className="users-forms__shadow" onClick={handleCloseUsersForms}>
      <section className="users-forms">
        <button
          type="button"
          className="users-forms__close"
          aria-label="Close forms"
          onClick={handleCloseUsersForms}
        />

        <div className="users-forms__container">
          {formType === "bitra" && (
            <BitraForm formData={formData} srcToThirdParty={srcToThirdParty} />
          )}
        </div>
      </section>
    </div>
  );
}

export default UsersForms;
