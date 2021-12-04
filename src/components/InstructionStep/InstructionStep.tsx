import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Row } from "react-bootstrap";
import styles from "./InstructionStep.module.scss";
import classnames from "classnames";
import { motion } from "framer-motion";

interface Props {
  step: string;
  key?: number;
}

export const InstructionStep: React.FC<Props> = ({ step, key }) => {
  const [checked, setChecked] = useState(false);
  return (
    <Row
      className={classnames(styles.instructionsRow, {
        [styles.checked]: checked,
      })}
      key={key}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setChecked(!checked)}
        className={styles.checkBtn}
      >
        {checked && <FontAwesomeIcon icon="check" color="white" />}
      </motion.div>
      <p>{step}</p>
    </Row>
  );
};
