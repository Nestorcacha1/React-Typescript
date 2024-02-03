import { Button } from "@mui/material";
import { useQuestionsStore } from "./store/questions";

const LIMIT_QUESTIONS = 10;

export const Start = () => {
  const fectchQuestions = useQuestionsStore((state) => state.fetchQuestions);

  const handleClick = () => {
    fectchQuestions(LIMIT_QUESTIONS);
  };
  return (
    <Button onClick={handleClick} variant="contained">
      !Empezar!
    </Button>
  );
};
