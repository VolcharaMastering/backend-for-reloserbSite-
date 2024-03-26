/* eslint-disable react/display-name */
import { Routes, Route, Form } from "react-router-dom";
import "@fontsource/sofia-sans-extra-condensed";
import "@fontsource/fira-sans-extra-condensed";
import "@fontsource/yanone-kaffeesatz";
import "@fontsource/rubik-lines";
import "@fontsource/alumni-sans";
import "@fontsource/yeseva-one";
import "@fontsource/pt-sans-narrow";
import "@fontsource/vollkorn";
import { observer } from "mobx-react-lite";
import { useResize } from "./utils/hooks/useResize";
import "./App.scss";
import Main from "./Pages/Main/Main";
import AbouotUs from "./Pages/AboutUs/AboutUs";
import Contacts from "./Pages/Contacts/Contacts";
import TheHeader from "./components/TheHeader/TheHeader";
import TheFooter from "./components/TheFooter/TheFooter";
import NotFound from "./Pages/NotFound/NotFound";
import popupState from "./stores/PopupState";
import Popup from "./components/Popup/Popup";
import Coworking from "./Pages/Coworking/Coworking";
import RealEstate from "./Pages/RealEstate/RealEstate";
import Cargo from "./Pages/Cargo/Cargo";
import VisaRun from "./Pages/VisaRun/VisaRun";
import Consult from "./Pages/Consult/Consult";
import Faq from "./Pages/Faq/Faq";
import LangPage from "./Pages/LangPage/LangPage";
import VOffice from "./Pages/VOffice/VOffice";
import Partner from "./Pages/Partner/Partner";
import Sitemap from "./Pages/Sitemap/Sitemap";
import PaddingFromHeader from "./components/UI/PaddinFromHeader/PaddingFromHeader";
import FormStore from "./stores/FormStore";
import UsersForms from "./components/UI/UsersForms/UsersForms";

const App = observer(() => {
  const screenSize = useResize();
  return (
    <>
      {popupState.popups.isOpened && (
        <Popup
          popupType="photo"
          popupContent={popupState.popups}
          size={screenSize.trakResolutionValue}
        />
      )}
      {FormStore.forms.isOpened && (
        <UsersForms
          formType={FormStore.forms.formType}
          formData={FormStore.forms.formData}
          srcToThirdParty={FormStore.forms.srcToThirdParty}
          size={screenSize.trakResolutionValue}
        />
      )}
      <PaddingFromHeader />
      <TheHeader />
      <main className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/coworking" element={<Coworking />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/cargo" element={<Cargo />} />
          <Route path="/visarun" element={<VisaRun />} />
          <Route path="/about" element={<AbouotUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/lang" element={<LangPage />} />
          <Route path="/voffice" element={<VOffice />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/sitemap.html" element={<Sitemap />} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </main>
      <TheFooter />
    </>
  );
});

export default App;
