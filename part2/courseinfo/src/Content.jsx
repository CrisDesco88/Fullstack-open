import React from "react";
import { Part } from "./Part";

export const Content = ({ parts }) => {
  
  return (
    <>
      {parts.map((element) => {
        return (
          <Part
            key={element.id}
            part={element.name}
            exercises={element.exercises}
          />
        );
      })}
    </>
  );
};
