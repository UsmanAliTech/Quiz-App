import React, { useState } from 'react';
import quizData from '../Data/Quizdata';
import '../Data/Quiz.css';

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    const correctAnswer = quizData[currentIndex].answer;
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentIndex + 1;
    if (nextQuestion < quizData.length) {
      setCurrentIndex(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentIndex(0);
    setShowResult(false);
  };

  return (
    <div className="quiz-container container mt-5">
      {showResult ? (
        <div className="result-card text-center p-5 shadow rounded mx-auto">
          <h2 className="fw-bold">Quiz Finished!</h2>
          <p className="fs-4">You scored</p>
          <div className="score-circle mx-auto my-4">
            <span className="display-3 fw-bold">{score}</span>
            <span className="fs-5">/{quizData.length}</span>
          </div>
          <button className="btn btn-quiz-primary px-5 py-3" onClick={restartQuiz}>
            Play Again
          </button>
        </div>
      ) : (
        <div className="quiz-card row align-items-center">
          {/* Left Side: Question Info */}
          <div className="col-md-6 text-md-start text-center order-2 order-md-1">
            <span className="badge mb-3">
              Question {currentIndex + 1} of {quizData.length}
            </span>
            <h2 className="question-text mb-4">
              {quizData[currentIndex].question}
            </h2>
            
            <div className="options-grid d-grid gap-3">
              {quizData[currentIndex].options.map((option, index) => (
                <button
                  key={index}
                  className="btn option-btn text-start py-3 px-4"
                  onClick={() => handleAnswerClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="col-md-6 text-center order-1 order-md-2 d-none d-md-block">
            <img src="/boy-illustration.png" alt="quiz" className="img-fluid quiz-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;