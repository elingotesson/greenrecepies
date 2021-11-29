import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Green Recepies</h1>
      <ul className="nav">
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/recepies">Recepies</NavLink>
        </li>

        <li>
          <NavLink to="/bao">Bao</NavLink>
        </li>
      </ul>
    </header>
  );
};
