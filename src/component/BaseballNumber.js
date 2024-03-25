import { useState } from "react";

export default function BaseballNumber() {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState(makeNumber());
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(false);
  const [yourAnswers, setYourAnswer] = useState([]);

  function makeNumber() {
    let numbers = [];
    while (numbers.length < 4) {
      const number = Math.floor(Math.random() * 10);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers.join("");
  }

  const onChange = (e) => {
    if (e.target.value.length <= 4 && !isNaN(e.target.value))
      setAnswer(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let strikeCount = 0;
    let ballCount = 0;
    let duplicates = answer.split("").some((x, i) => answer.indexOf(x) !== i);
    if (duplicates) {
      alert("중복된 숫자를 입력했어요");
      setAnswer("");
      return;
    }
    for (let i = 0; i < question.length; i++) {
      if (answer[i] === question[i]) {
        strikeCount++;
      } else if (question.includes(answer[i])) {
        ballCount++;
      }
    }

    if (strikeCount === 4) {
      // 맞췄을 때
      setResult(true);
      setTimeout(() => {
        setQuestion(makeNumber());
        setStrike(0);
        setBall(0);
        setCount(0);
        setYourAnswer([]);
        setResult(false);
      }, 2000);
    } else if (count >= 9) {
      // 시도 횟수가 10회 초과 햇을 떄
      alert(`Game Over 답은 ${question}`);

      setQuestion(makeNumber());
      setStrike(0);
      setBall(0);
      setCount(0);
      setYourAnswer([]);
      setResult(false);
    } else {
      // 틀렸을 때
      setCount((prev) => prev + 1);
      setStrike(strikeCount);
      setBall(ballCount);
      setYourAnswer((prev) => [...prev, answer]);
    }
    setAnswer("");
  };

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <h2>시도 횟수 : {count}</h2>
      <h2>
        {strike} 스트라이크 {ball} 볼
      </h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          maxLength={4}
          value={answer}
          required
          placeholder="답을 입력하세요"
          onChange={onChange}
        />
        <button>Enter</button>
      </form>
      <h1>{result ? "정답입니다!" : null}</h1>
      <ul>
        <h2>your Answers</h2>
        {yourAnswers.map((v, i) => (
          <li key={`${v} + ${i}`}>{`${v} => ${strike}스트라이크 ${ball}볼`}</li>
        ))}
      </ul>
    </div>
  );
}
