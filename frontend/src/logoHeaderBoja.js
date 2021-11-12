import foslogo from "./assets/media/foslogo.png";
import pobjedalogo from "./assets/media/pobjedalogo.svg";
import rtcglogo from "./assets/media/1200px-RTCG_logo.svg.png";
import novostilogo from "./assets/media/novostilogo.jpg";
import standardlogo from "./assets/media/standard.png";

export const headerLogo = (portal) => {
  switch (portal) {
    case "Cdm":
      return {
        logo: "https://www.cdm.me/wp-content/uploads/static/img/cdm-white.svg",
        boja: { backgroundColor: "#ad2222" },
      };

    case "Dan":
      return {
        logo: "https://www.dan.co.me/templates/site/images/svgs/dan_logo_white.svg",
        boja: { backgroundColor: "#e00000" },
      };

    case "Fos":
      return {
        logo: foslogo,
        boja: { backgroundColor: "#e9bd1e" },
      };

    case "In4s":
      return {
        logo: "https://www.in4s.net/wp-content/uploads/2016/03/logoMobile230x90.png",
        boja: { backgroundColor: "#0086cb" },
      };

    case "Pobjeda":
      return {
        logo: pobjedalogo,
        boja: { backgroundColor: "#ffffff" },
      };

    case "Rtcg":
      return {
        logo: rtcglogo,
        boja: { backgroundColor: "#0c0c0c" },
      };

    case "Vijesti":
      return {
        logo: "https://www.vijesti.me/resources/images/header/logo.svg",
        boja: { backgroundColor: "#055891" },
      };

    case "Novosti":
      return {
        logo: novostilogo,
        boja: { backgroundColor: "#000000" },
      };

    case "Sportske":
      return {
        logo: novostilogo,
        boja: { backgroundColor: "#000000" },
      };

    case "Standard":
      return {
        logo: standardlogo,
        boja: { backgroundColor: "black" },
      };

    default:
      break;
  }
};
