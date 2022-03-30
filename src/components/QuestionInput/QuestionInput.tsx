import { addDoc, collection } from "firebase/firestore";
import { FC, useState, SyntheticEvent, ChangeEvent } from "react";
import { db } from "../../config/firebase";
import { useAuth } from "../../context/AuthProvider";
import { StyledQuestionInput } from "./styles";

export const QuestionInput: FC = () => {
  const [question, setQuestion] = useState<string>("");
  const { userConfig } = useAuth();
  const { displayName } = userConfig;
  const handleSubmit = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "notes"), {
        body: question,
        author: displayName ? displayName : "Anónimo",
      });
      console.log("entra");
    } catch (error) {
      console.log(error);
    }
    setQuestion("");
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledQuestionInput
        placeholder="Escribe una pregunta"
        name="question"
        value={question}
        onChange={handleTextChange}
      />
    </form>
  );
};
