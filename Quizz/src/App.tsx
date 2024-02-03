import { Container, Stack, Typography } from "@mui/material";
import "./App.css";
import { LogoJavascript } from "./logoJavascript";
import { Start } from "./Start";
import { useQuestionsStore } from "./store/questions";
import { Game } from "./game";
function App() {
  const questions = useQuestionsStore((state) => state.questions);
  console.log(questions);
  return (
    <main>
      <Container maxWidth="sm">
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          <LogoJavascript />
          <Typography variant="h2" component="h1">
            JavaScritp Quizz
          </Typography>
        </Stack>
        {questions.length === 0 && <Start />}
        {questions.length > 0 && <Game />}
      </Container>
    </main>
  );
}

export default App;
