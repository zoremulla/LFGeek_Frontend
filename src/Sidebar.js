import React from "react";
import { slide as Menu } from "react-burger-menu";

export default Sidebar => {
  return (
    <Menu>
      <a className="menu-item" href="/gameslist/">
        Home
      </a>

      <a className="menu-item" href="/profile/">
        Profile
      </a>

      <a className="menu-item" href="/PlayersList/">
        Find a group
      </a>

      <a className="menu-item" href="/ClanList/">
        Clans
      </a>

      <a className="menu-item" href="/about/">
        About
      </a>
    </Menu>
  );
};
