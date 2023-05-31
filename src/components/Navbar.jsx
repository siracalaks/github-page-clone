import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiBell, FiPlus } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineGithub } from "react-icons/ai";

import "../styles/_navbar.scss";
import Menu from "./Menu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      {/* Left */}
      <div className="navLeft">
        <Link to="/">
          <AiOutlineGithub className="svg" />
        </Link>
        <div>
          <input type="text" placeholder="Search or jump to" />
        </div>
      </div>

      {/* Center */}
      <div className="navCenter">
        <h2>Pulls</h2>
        <h2>Issues</h2>
        <h2>MarketPlace</h2>
        <h2>Explore</h2>
      </div>

      {/* Right */}
      <div className="navRight">
        <FiBell />
        <div className="navRightIcons">
          <FiPlus />
          <IoMdArrowDropdown />
        </div>
        <div className="navRightIcons" onClick={() => setShowMenu(!showMenu)}>
          <img
            src="https://avatars.githubusercontent.com/u/102253572?v=4"
            alt=""
          />
          <IoMdArrowDropdown />
        </div>
      </div>
      {showMenu && <Menu />}
    </nav>
  );
};

export default Navbar;
