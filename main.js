const link = "https://api.adviceslip.com/advice";

const adviceNumberEl = document.getElementById("advice-number");
const adviceEl = document.getElementById("advice");
const Btn = document.getElementById("generate-btn");
const getData = async () => {
  const response = await fetch(link);
  const data = await response.json();
  return data;
};
console.log(getData);
const render = (adviceObj) => {
  const { id, advice } = adviceObj;
  adviceNumberEl.textContent = `ADVICE #${id}`;
  adviceEl.textContent = advice;
};
const generateAdvice = async () => {
  const quote = await getData();
  const newQuote = await quote.slip;

  render(newQuote);
};
Btn.addEventListener("click", generateAdvice);
