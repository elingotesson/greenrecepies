import React from "react";
import json from "../json/recepies.json";

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
    <div>
      <h2>{recepie.title}</h2>
      {recepie.imgUrl && <img src={recepie.imgUrl} alt={recepie.title} />}
      <ul>
        {recepie.ingredients &&
          recepie.ingredients.map((item: string) => <li>{item}</li>)}
      </ul>
    </div>
  );
};
