# 구구단

# 끝말잇기

# 숫자 야구

- 중복되지 않는 4자리 숫자 만들기

````function makeNumber() {
    let numbers = [];
    // 4자리가 될 때까지 반복
    while (numbers.length < 4) {
    // 0~9까지 임의의 자연수 생성
    const number = Math.floor(Math.random() \* 10);
    // 중복 검사
    if (!numbers.includes(number)) {
    numbers.push(number);
    }
    }
    return numbers.join("");
    }```
````

- 사용자가 중복된 숫자 입력시 alert()

```
// 사용자의 입려값을 some함수로 검사 -> answer의 요소 하나하나 index검사를 하면서 index비교
    let duplicates = answer.split("").some((x, i) => answer.indexOf(x) !== i);

```

- 사용자 입력값과 문제 숫자가 맞았을 때, 틀렸을 때, 10회 시도 초과했을 때 로직

```

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
```
