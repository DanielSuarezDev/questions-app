import { FC } from "react";
import { deleteDoc, doc } from "firebase/firestore";

import { db } from "../../config/firebase";
import { Container, Body, Button, Author } from "./styles";

export const QuestionBox: FC<any> = ({ body, id, author }) => {
  const handleDeleteDocument = () => {
    deleteDocument(id);
  };
  const deleteDocument = async (id: string) => {
    try {
      await deleteDoc(doc(db, "notes", id));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container>
      <Body>{body}</Body>
      <Author>{author}</Author>
      <Button onClick={handleDeleteDocument}>Eliminar</Button>
    </Container>
  );
};
