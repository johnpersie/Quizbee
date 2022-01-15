import React, { useState } from "react";

const QuestionBox = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState(options);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button
          disabled={isDisabled}
          key={index}
          className="answerBtn"
          onClick={() => {
            setAnswer([text]);
            selected(text);
            setIsDisabled(handleClick);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;
