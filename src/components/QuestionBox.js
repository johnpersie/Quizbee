import React from "react";

const QuestionBox = ({ question, Option }) => {
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
    </div>
  );
};

export default QuestionBox;
