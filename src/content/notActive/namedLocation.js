const namedLocation = (location) => {
  let myLocation = "";

  switch (location.pathname) {
    case "/about":
      myLocation = "О нас";
      break;

    case "/blog":
      myLocation = "Блог";
      break;

    case "/contacts":
      myLocation = "Контакты";
      break;
    default:
      myLocation = "Main Page";
      break;
  }
  return myLocation;
};
export default namedLocation;
