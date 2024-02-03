import { Button } from "@mui/material";
import { useQuestionsData } from "./Hook/useQuestionquizz";
import { useQuestionsStore } from "./store/questions";
export const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionsData();
  const reset = useQuestionsStore((state) => state.reset);
  return (
    <footer style={{ marginTop: "16px" }}>
      <strong>
        {`✅ ${correct} Corretas  - ❌ ${incorrect} Incorectas - ❓ ${unanswered} No respondido`}
      </strong>
      <div style={{ marginTop: "16px" }}>
        <Button
          onClick={() => {
            reset();
          }}
        >
          <strong>Reiniciar</strong>
        </Button>
      </div>
    </footer>
  );
};
