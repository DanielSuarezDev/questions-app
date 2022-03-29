import {
  collection,
  getDocs,
  query,
  DocumentData,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { FC, useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { Header } from "../Header/Header";
import { StyledLayout } from "./styles";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

interface Question {
  body: string;
}

interface Note {
  id: string;
  data: Question;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const infoNotes = query(collection(db, "notes"));

  const handleinfo = async () => {
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

  const deleteDocument = async (id: string) => {
    try {
      await deleteDoc(doc(db, "notes", id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleinfo();
  }, []);

  return (
    <StyledLayout>
      <Header />
      {children}
      {notes.map((data: Note): JSX.Element | JSX.Element[] => {
        const handleDeleteDocument = () => {
          deleteDocument(data.id);
        };

        return (
          <div>
            <p>{data.data.body}</p>
            <button onClick={handleDeleteDocument}>Eliminame</button>
          </div>
        );
      })}
    </StyledLayout>
  );
};
