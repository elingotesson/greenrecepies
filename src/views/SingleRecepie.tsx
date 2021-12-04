import React from "react";
import styles from "./SingleRecepie.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InstructionStep } from "../components/InstructionStep/InstructionStep";
import { useLocation } from "react-router-dom";
import { Location } from "history";

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

interface LocationWithRecepie extends Location {
  recepie: Recepie;
}

export const SingleRecepie: React.FC = () => {
  const location = useLocation<LocationWithRecepie>();
  const recepie = location.state.recepie;

  if (!recepie) {
    return null;
  }

  const {
    title,
    imgUrl,
    servings,
    instructions,
    originUrl,
    ingredientsGroups,
  } = recepie;

  const titleColLg = imgUrl ? 4 : 8;

  return (
    <Container className={styles.container}>
      <Row className={styles.ingredientRow}>
        <Col xs={{ order: 2, span: 12 }} lg={{ order: 1, span: titleColLg }}>
          <h1 className={styles.title}>{recepie.title}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
        <Col xs={{ order: 1, span: 12 }} lg={{ order: 2, span: 8 }}>
          {imgUrl && <img src={imgUrl} alt={title} className={styles.img} />}
          {originUrl && (
            <div className={styles.originalRecepieLink}>
              <p>
                Orginalreceptet hittar du{" "}
                <a href={originUrl} rel="noreferrer noopener">
                  här
                </a>
              </p>
            </div>
          )}
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={4}>
          <div className={styles.ingredientsContainer}>
            <div className={styles.servingRow}>
              <FontAwesomeIcon icon="user-friends" className={styles.icon} />
              {servings} portioner
            </div>
            <h4 className={styles.subTitle}>Ingredienser</h4>
            {ingredientsGroups &&
              ingredientsGroups.map(
                (ingredientsGroup: IngredientsGroup, index: number) => (
                  <div key={index}>
                    <h5 className={styles.instructionsTitle}>
                      {ingredientsGroup.title}
                    </h5>
                    <ul className={styles.ingredientsList} key={index}>
                      {ingredientsGroup.ingredients &&
                        ingredientsGroup.ingredients.map(
                          (item: string, index: number) => (
                            <li key={index}>{item}</li>
                          )
                        )}
                    </ul>
                  </div>
                )
              )}
          </div>
        </Col>
        <Col xs={12} lg={8}>
          <div className={styles.instructionsContainer}>
            <h4 className={styles.subTitle}>Gör såhär</h4>
            {instructions &&
              instructions.map((instuction: Step) => (
                <Row className={styles.instructionsRow}>
                  <Col>
                    <h5 className={styles.instructionsTitle}>
                      {instuction.title}
                    </h5>
                    {instuction.steps.map((step: string, index: number) => (
                      <span key={index}>
                        <InstructionStep step={step} />
                      </span>
                    ))}
                  </Col>
                </Row>
              ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
