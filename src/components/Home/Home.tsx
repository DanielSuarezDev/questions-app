import { useEffect, useState } from "react";
import { QuestionInput } from "../QuestionInput/QuestionInput";
import { query, getDocs, collection, DocumentData } from "firebase/firestore";
import { db } from "../../config/firebase";
import { QuestionBox } from "../QuestionBox/QuestionBox";
import { Container } from "./styles";
import { useAuth } from "../../context/AuthProvider";

interface Question {
  body: string;
}

interface Note {
  id: string;
  data: Question;
}

export const Home = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const infoNotes = query(collection(db, "notes"));

  const handleInfo = async () => {
    const querySnapshot = await getDocs(infoNotes);

    setNotes(
      querySnapshot.docs.map(
        (doc: DocumentData): Note => ({
          id: doc.id,
          data: doc.data(),
        })
      )
    );
  };

  useEffect(() => {
    handleInfo();
  }, [notes]);

  return (
    <Container>
      <QuestionInput />
      {notes.map((note: any) => (
        <QuestionBox
          id={note.id}
          key={note.id}
          body={note.data.body}
          author={note.data.author}
        />
      ))}
    </Container>
  );
};
