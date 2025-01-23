import React, { useState } from "react";
import "./QuestionPage.css";

const questions = [
  {
    text: "À quel royaume appartenait Douai avant le traité des Pyrénées de 1659 ?",
    options: ["Le royaume de Hollande", "Le royaume d’Espagne", "La Prusse"],
    answer: "Le royaume d’Espagne",
    hint: "Ce royaume possédait de nombreuses régions du nord de la France avant 1659."
  },
  {
    text: "Quelle équipe a remporté le Tour de France en 2023 ?",
    options: ["Jumbo-Visma", "UAE Team Emirates", "Ineos Grenadiers"],
    answer: "Jumbo-Visma",
    hint: "Cette équipe domine le cyclisme depuis quelques années."
  },
  {
    text: "Quel coureur détient le record de victoires sur le Tour de France ?",
    options: ["Eddy Merckx", "Bernard Hinault", "Chris Froome"],
    answer: "Eddy Merckx",
    hint: "Ce coureur belge est une légende du cyclisme."
  }
];

const QuestionPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowHint(false);
    }
  };

  const handleHint = () => {
    setShowHint(true);
  };

  return (
    <div className="question-container">
      <h2 className="question-number">QUESTION {currentQuestionIndex + 1}/{questions.length}</h2>
      <div className="question-box">
        <p className="question-text">{questions[currentQuestionIndex].text}</p>

        <div className="answers">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button key={index} className="answer-btn">
              {option}
            </button>
          ))}
        </div>

        {showHint && <p className="hint">{questions[currentQuestionIndex].hint}</p>}

        <div className="buttons">
          <button className="hint-btn" onClick={handleHint}>INDICE</button>
          <button className="next-btn" onClick={handleNext}>SUIVANT</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
