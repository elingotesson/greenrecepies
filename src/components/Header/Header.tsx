import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Row className={"align-items-end"}>
          <Col>
            <h1 className={styles.title}>Green Recepies</h1>
          </Col>
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
        </Row>
      </Container>
    </header>
  );
};
