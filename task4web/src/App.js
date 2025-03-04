import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Calc = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const calculate = (query) => {
    const words = query.toLowerCase().replace("?", "").split(" ");

    if (words.length < 4 || words[0] !== "what" || words[1] !== "is") {
      setAnswer("Invalid format! Try: What is 5 plus 7?");
      return;
    }

    let num1 = parseInt(words[2]);
    let operator = words.slice(3, words.length - 1).join(" ");
    let num2 = parseInt(words[words.length - 1]);

    if (isNaN(num1) || isNaN(num2)) {
      setAnswer("Invalid numbers! Try again.");
      return;
    }

    let result;
    switch (operator) {
      case "plus":
        result = num1 + num2;
        break;
      case "minus":
        result = num1 - num2;
        break;
      case "multiplied by":
        result = num1 * num2;
        break;
      case "divided by":
        result = num1 / num2;
        break;
      default:
        setAnswer("Invalid operation! Use plus, minus, multiplied by, or divided by.");
        return;
    }

    setAnswer(`${num1} ${operator} ${num2} is ${result}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculate(question);
  };

  return (
    <div className="container mt-5 text-center">
      <h2>Simple Calc</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter your question (e.g., What is 5 plus 7?)"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Calculate</button>
      </form>
      {answer && <h4 className="mt-3">{answer}</h4>}
    </div>
  );
};

export default Calc;
