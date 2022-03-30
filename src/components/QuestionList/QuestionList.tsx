import { FC } from "react";

import { QuestionBox } from "../QuestionBox/QuestionBox";

import { Container } from "./styled";

export const QuestionList: FC<any> = (notes) => {
  // console.log(notes);
  return (
    <Container>
      <QuestionBox />
    </Container>
  );
};
