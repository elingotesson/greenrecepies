import React from "react";
import json from "../json/recepies.json";
import styles from "./SingleRecepie.module.scss";
import { Container, Row, Col } from "react-bootstrap";

type InstructionStep = {
  title?: string;
  step: string[];
};

type Recepie = {
  title: string;
  imgUrl: string;
  portions: string;
  descripton?: string;
  ingredients: string[];
  instructions: InstructionStep[];
  originUrl: string;
};

export const SingleRecepie: React.FC = () => {
  const recepie = json.recepies.find(
    (item) => item.title === "VEGANSKA BAO BUNS"
  );

  if (!recepie) {
    return null;
  }

  return (
    <Container>
      <h2 className={styles.title}>{recepie.title}</h2>
      <Row className={styles.ingredientRow}>
        <Col xs={{ order: 2, span: 12 }} lg={{ order: 1, span: 4 }}>
          <h4 className={styles.subTitle}>Ingredienser</h4>
          <ul>
            {recepie.ingredients &&
              recepie.ingredients.map((item: string) => <li>{item}</li>)}
          </ul>
        </Col>
        <Col xs={{ order: 1, span: 12 }} lg={{ order: 2, span: 8 }}>
          {recepie.imgUrl && (
            <img
              src={recepie.imgUrl}
              alt={recepie.title}
              className={styles.img}
            />
          )}
        </Col>
      </Row>
      <h4 className={styles.subTitle}>Gör såhär</h4>
      {recepie.instructions &&
        recepie.instructions.map((instuction) => (
          <Row>
            <Col>
              <h5>{instuction.title}</h5>
              <ol>
                {instuction.steps.map((step) => (
                  <li>{step}</li>
                ))}
              </ol>
            </Col>
          </Row>
        ))}
    </Container>
  );
};
