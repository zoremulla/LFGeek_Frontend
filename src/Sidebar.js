import React from "react";
import { slide as Menu } from "react-burger-menu";

export default Sidebar => {
  return (
    <Menu>
      <a className="menu-item" href="/GamesList/">
        Home
      </a>

      <a className="menu-item" href="/login/">
        Profile
      </a>

      <a className="menu-item" href="/playerlist/">
        Find a group
      </a>

      <a className="menu-item" href="/gameslist/">
        Games
      </a>

      <a className="menu-item" href="/about/">
        About
      </a>
    </Menu>
  );
};
