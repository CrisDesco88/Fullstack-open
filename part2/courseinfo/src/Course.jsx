import React from "react";
import { Header } from "./Header";
import { Total } from "./Total";
import { Content } from "./Content";

export const Course = ({ name, parts, exercises }) => {
  return (
    <>
      <Header course={name} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={parts.map((x) => x["exercises"])} />
    </>
  );
};
