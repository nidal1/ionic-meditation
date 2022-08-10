import "./TabBase.scss";
import hero from "../assets/images/hero.png";
import hamburger from "../assets/images/hamburger.svg";
import logo_sm from "../assets/images/logo_sm.svg";

function TabBase({ children }) {
  return (
    <div className="container">
      <nav>
        <img src={hamburger} alt="" />
        <img src={logo_sm} alt="" />
        <img src={hero} alt="" className="hero" />
      </nav>
      {children}
    </div>
  );
}

export default TabBase;
