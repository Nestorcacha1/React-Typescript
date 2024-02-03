export const fetchQuestions = async (limit: number) => {
  const res = await fetch("http://localhost:5173/dato.json");
  const json = await res.json();
  return json;
};
