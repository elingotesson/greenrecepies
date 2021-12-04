import React from "react";
import json from "../json/recepies.json";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "./Home.module.scss";
import { NavLink } from "react-router-dom";

type Step = {
  title?: string;
  steps: string[];
};

type IngredientsGroup = {
  title?: string;
  ingredients: string[];
};

type Recepie = {
  title: string;
  imgUrl: string;
  servings: string;
  descripton?: string;
  ingredientsGroups: IngredientsGroup[];
  instructions: Step[];
  originUrl: string;
};

export const Home: React.FC = () => {
  const recepies = json.recepies;

  return (
    <Container>
      <Row>
        {recepies &&
          recepies.map((recepie: Recepie, index) => (
            <Col
              sm={12}
              md={6}
              lg={4}
              key={index}
              className={styles.cardColumn}
            >
              <NavLink
                to={{
                  pathname: "/recepie",
                  state: {
                    recepie: recepie,
                  },
                }}
              >
                <Card className={styles.recepieCard}>
                  <Card.Img
                    variant="top"
                    src={
                      recepie.imgUrl
                        ? recepie.imgUrl
                        : "https://icon-library.com/images/image-placeholder-icon/image-placeholder-icon-6.jpg"
                    }
                    style={{
                      height: "13rem",
                      maxHeight: "13rem",
                      objectFit: "cover",
                    }}
                  />
                  <Card.Body>
                    <Card.Title className={styles.cardTitle}>
                      {recepie.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </NavLink>
            </Col>
          ))}
      </Row>
    </Container>
  );
};
