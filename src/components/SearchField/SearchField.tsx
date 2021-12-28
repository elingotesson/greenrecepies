import React from "react";
import styles from "./SearchField.module.scss";

interface Props {
  value?: string;
  onChange?: (event: React.ChangeEvent<any>) => void;
  onKeyUp?: (event: any) => void;
}

export const SearchField: React.FC<Props> = ({ value, onChange, onKeyUp }) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Sök på recept..."
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        className={styles.searchfield}
      />
    </div>
  );
};
