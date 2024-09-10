import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Round1.css';

const dummyQuestions = [
  { id: 1, question: "What is 2+2?", options: ["3", "4", "5", "6"] },
  { id: 2, question: "What is the capital of France?", options: ["London", "Berlin", "Paris", "Madrid"] },
];

function Round1() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState({});
  const [timeLeft, setTimeLeft] = useState(20); // 30 minutes in seconds
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [modalTimeLeft, setModalTimeLeft] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setIsTimeUp(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isTimeUp) {
      const modalTimer = setInterval(() => {
        setModalTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(modalTimer);
            handleSubmit();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(modalTimer);
    }
  }, [isTimeUp]);

  const handleOptionSelect = (questionId, option) => {
    if (!isTimeUp) {
      setAnswers({ ...answers, [questionId]: option });
    }
  };

  const handleNext = () => {
    if (!isTimeUp && currentQuestion < dummyQuestions.length - 1) {
      const currentQuestionId = dummyQuestions[currentQuestion].id;
      if (answers[currentQuestionId]) {
        setAnsweredQuestions({ ...answeredQuestions, [currentQuestionId]: true });
      }
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (!isTimeUp && currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/answers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(answers),
      });
      if (response.ok) {
        console.log('Answers submitted successfully!');
        localStorage.setItem('round1Completed', 'true');
        localStorage.setItem('round1CompletedAt', Date.now().toString());
        navigate('/rules');
      } else {
        console.error('Failed to submit answers. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting answers:', error);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="quiz-container">
      <div className="question-section">
        <h2>Question {currentQuestion + 1}</h2>
        <p>{dummyQuestions[currentQuestion].question}</p>
        <div className="options">
          {dummyQuestions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(dummyQuestions[currentQuestion].id, option)}
              className={answers[dummyQuestions[currentQuestion].id] === option ? 'selected' : ''}
              disabled={isTimeUp}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="navigation-buttons">
          <button onClick={handlePrev} disabled={currentQuestion === 0 || isTimeUp}>Previous</button>
          <button onClick={handleNext} disabled={currentQuestion === dummyQuestions.length - 1 || isTimeUp}>Next</button>
        </div>
      </div>
      <div className="quiz-sidebar">
        <div className="timer">Time Left: {formatTime(timeLeft)}</div>
        <div className="question-navigator">
          {dummyQuestions.map((q, index) => (
            <button
              key={q.id}
              onClick={() => !isTimeUp && setCurrentQuestion(index)}
              className={`
                ${currentQuestion === index ? 'active' : ''}
                ${answeredQuestions[q.id] ? 'answered' : ''}
              `}
              disabled={isTimeUp}
            >
              {q.id}
            </button>
          ))}
        </div>
        <button className="submit-button" onClick={handleSubmit} disabled={isTimeUp}>Submit</button>
      </div>
      {isTimeUp && (
        <div className="modal">
          <div className="modal-content">
            <h2>Time's Up!</h2>
            <p>Your answers are being submitted in {modalTimeLeft} seconds...</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Round1;