import React from "react";

export const Total = ({ exercises }) => {
  return (
    <p>
      Total of {exercises.reduce((prev, curr) => prev + curr, 0)} exercises
    </p>
  );
};
