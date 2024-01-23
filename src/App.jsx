import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Main from "./Pages/Main/Main";
import AbouotUs from "./Pages/AboutUs/AboutUs";
import Reviews from "./Pages/Reviews/Reviews";
import Blog from "./Pages/Blog/Blog";
import Contacts from "./Pages/Contacts/Contacts";
import TheHeader from "./components/TheHeader/TheHeader";
import TheFooter from "./components/TheFooter/TheFooter";
import { useResize } from "./utils/hooks/useResize";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <TheHeader />
      <main className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AbouotUs />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <TheFooter />
    </>
  );
}

export default App;
