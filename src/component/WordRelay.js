import { useState } from "react";

export default function WordRelay() {
  const [value, setValue] = useState("");
  const [currentWord, setCurrentWord] = useState("사과");
  const [result, setResult] = useState(false);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (value[0] === currentWord[currentWord.length - 1]) {
      setResult(true);
      setCurrentWord(value);
      setValue("");
    } else {
      setResult(false);
      setValue("");
    }
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
      <h1>{currentWord}</h1>
      <form onSubmit={onSubmit}>
        <input
          className="wordInput"
          type="string"
          placeholder="다음은..?"
          onChange={onChange}
          value={value}
        />
        <button>입력</button>
      </form>
      <h2>{result ? "Good" : "다시 생각해 봐"}</h2>
    </div>
  );
}
