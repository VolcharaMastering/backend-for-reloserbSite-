/* eslint-disable react/display-name */
import { Routes, Route } from "react-router-dom";
import "@fontsource/sofia-sans-extra-condensed";
import "@fontsource/fira-sans-extra-condensed";
import "@fontsource/yanone-kaffeesatz";
import "@fontsource/rubik-lines";
import "@fontsource/vollkorn";
import { observer } from "mobx-react-lite";
import "./App.scss";
import Main from "./Pages/Main/Main";
// import AbouotUs from "./Pages/AboutUs/AboutUs";
// import Reviews from "./Pages/Reviews/Reviews";
// import Blog from "./Pages/Blog/Blog";
import Contacts from "./Pages/Contacts/Contacts";
import TheHeader from "./components/TheHeader/TheHeader";
import TheFooter from "./components/TheFooter/TheFooter";
import NotFound from "./Pages/NotFound/NotFound";
import popupState from "./stores/PopupState";
import Popup from "./components/Popup/Popup";
import { useResize } from "./utils/hooks/useResize";
import PaddingFromHeader from "./components/UI/PaddinFromHeader/PaddingFromHeader";
import Coworking from "./Pages/Coworking/Coworking";
import RealEstate from "./Pages/RealEstate/RealEstate";
import Cargo from "./Pages/Cargo/Cargo";
import VisaRun from "./Pages/VisaRun/VisaRun";
import Consult from "./Pages/Consult/Consult";

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
          {/* <Route path="/about" element={<AbouotUs />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blog" element={<Blog />} /> */}
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </main>
      <TheFooter />
    </>
  );
});

export default App;
