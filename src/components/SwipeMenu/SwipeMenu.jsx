import HeaderMenu from "../HeaderMenu/HeaderMenu";
import "./SwipeMenu.scss";

function SwipeMenu({ setIsOpen, screenSize }) {
  const handleCloseMenu = () => {
    setIsOpen();
  };
  return (
    <section className={`swipe-menu ${screenSize}`} onClick={handleCloseMenu}>
      <HeaderMenu />
    </section>
  );
}

export default SwipeMenu;
