import cargo from "../assets/header_icons/sub-menu/cargo.svg";
import consult from "../assets/header_icons/sub-menu/consult.svg";
import coworking from "../assets/header_icons/sub-menu/coworking.svg";
import faq from "../assets/header_icons/menu/faq.svg";
import lang from "../assets/header_icons/sub-menu/lang.svg";
import realEstate from "../assets/header_icons/sub-menu/real-estate.svg";
import visarun from "../assets/header_icons/sub-menu/visarun.svg";
import voffice from "../assets/header_icons/menu/voffice.svg";
import contacts from "../assets/header_icons/menu/contacts.svg";
import main from "../assets/header_icons/menu/main.svg";
import partner from "../assets/header_icons/menu/partner.svg";

const submenuIconsArray = [
  { srcIcon: consult, linkTo: "/consult" },
  { srcIcon: coworking, linkTo: "/coworking" },
  { srcIcon: realEstate, linkTo: "/real-estate" },
  { srcIcon: cargo, linkTo: "/cargo" },
  { srcIcon: visarun, linkTo: "/visarun" },
  { srcIcon: lang, linkTo: "/lang" },
];

const menuIconsArray = [
  { srcIcon: main, linkTo: "/" },
  { srcIcon: voffice, linkTo: "/voffice" },
  { srcIcon: partner, linkTo: "/partner" },
  { srcIcon: faq, linkTo: "/faq" },
  { srcIcon: contacts, linkTo: "/contacts" },
];

const menuArray = [
  { linkTo: "/" },
  { linkTo: "/consult" },
  { linkTo: "/coworking" },
  { linkTo: "/voffice" },
  { linkTo: "/partner" },
  { linkTo: "/real-estate" },
  { linkTo: "/cargo" },
  { linkTo: "/visarun" },
  { linkTo: "/lang" },
  { linkTo: "/faq" },
  { linkTo: "/contacts" },
];

export { menuIconsArray, submenuIconsArray, menuArray };
