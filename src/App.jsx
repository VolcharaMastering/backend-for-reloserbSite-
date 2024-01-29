/* eslint-disable react/display-name */
import { Routes, Route } from "react-router-dom";
import "@fontsource/sofia-sans-extra-condensed";
import "@fontsource/fira-sans-extra-condensed";
import "@fontsource/yanone-kaffeesatz";
import { observer } from "mobx-react-lite";
import "./App.scss";
import Main from "./Pages/Main/Main";
import AbouotUs from "./Pages/AboutUs/AboutUs";
import Reviews from "./Pages/Reviews/Reviews";
import Blog from "./Pages/Blog/Blog";
import Contacts from "./Pages/Contacts/Contacts";
import TheHeader from "./components/TheHeader/TheHeader";
import TheFooter from "./components/TheFooter/TheFooter";
import NotFound from "./Pages/NotFound/NotFound";
import popupState from "./stores/PopupState";
import Popup from "./components/Popup/Popup";
import { useResize } from "./utils/hooks/useResize";

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
      <TheHeader />
      <main className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AbouotUs />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </main>
      <TheFooter />
    </>
  );
});

export default App;
