import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export let Navbar = () => {
  let [toggle, settoggle] = useState(false);
  let [changeclass, setchangeclass] = useState("fas fa-bars");
  let [popnavbar, setpopnavbar] = useState("nav-menu");

  let maketoggle = () => {
    settoggle(!toggle);
  };

  useEffect(() => {
    setchangeclass(toggle ? "fas fa-times" : "fas fa-bars");
    setpopnavbar(toggle ? "nav-menu active" : "nav-menu");
  }, [toggle]);
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Travel Mania</h1>

      <div className="menu-icons" onClick={maketoggle}>
        <i className={changeclass}></i>
      </div>

      <ul className={popnavbar}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
};
