import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";
import { useState } from "react";
import "./Navigation.css";
import MenuData from "../data/MenuData";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <aside>
      <div className="navbar">
        <div className="navbar-toggle">
          <Link to="#" className="menu-bar">
            <FaBars onClick={toggleMenu} />
          </Link>
          <nav className={showMenu ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={toggleMenu}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bar">
                  <FaWindowClose />
                </Link>
              </li>
              
              {MenuData.map((menu, index) => {
                return (
                  <li className="menu-text" key={index}> 
                    <Link to={menu.path}>
                      {menu.icon}
                      <span>{menu.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Navigation;
