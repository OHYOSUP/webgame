import { useRef, useState } from "react";

export default function Gugudan() {
  const [totalState, setTotalState] = useState({
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    answer: "",
    value: "",
  });
  const input = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      parseInt(totalState.first) * parseInt(totalState.second) ==
      totalState.value
    ) {
      setTotalState({
        answer: "정답!",
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: "",
      });
    } else {
      setTotalState((prev) => ({
        ...prev,
        answer: "땡!",
        value: "",
      }));
    }
    input.current.focus();
  };
  function onChange(e) {
    setTotalState((prev) => ({ ...prev, value: e.target.value }));
  }

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
      <h1>
        {totalState.first} 곱하기 {totalState.second}?
      </h1>
      <form onSubmit={onSubmit}>
        <input
          ref={input}
          type="number"
          required={true}
          placeholder="답을 입력하세요"
          value={totalState.value}
          onChange={onChange}
        />
        <button>제출</button>
      </form>
      <h2>{totalState.answer}</h2>
    </div>
  );
}
