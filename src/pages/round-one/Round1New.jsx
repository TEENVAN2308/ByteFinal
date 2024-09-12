import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Round1.css';
import Navbar from '../../components/navbar';

function Round1() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState({});
  const [timeLeft, setTimeLeft] = useState(1800); // 20 seconds for testing purposes
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [modalTimeLeft, setModalTimeLeft] = useState(3);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('https://byte-0dmt.onrender.com/api/questions/round1');
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    fetchQuestions();
  }, []);

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

  const handleOptionSelect = (questionId, choice) => {
    if (!isTimeUp) {
      // Update the answers state to replace any existing answer for the current question
      setAnswers((prevAnswers) => {
        const newAnswers = prevAnswers.filter(
          (answer) => answer.questionId !== questionId
        );
        newAnswers.push({ questionId, choice });
        return newAnswers;
      });
      setAnsweredQuestions((prevAnswered) => ({
        ...prevAnswered,
        [questionId]: true,
      }));
    }
  };


  const handleNext = () => {
    if (!isTimeUp && currentQuestion < questions.length - 1) {
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
      const teamName = localStorage.getItem('teamName');
      // console.log("Answers", answers)

      const response = await fetch('https://byte-0dmt.onrender.com/api/questions/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          answers,
          teamName,
          round: 1,
        }),
      });
      if (response.ok) {
        localStorage.setItem('round1Completed', 'true');
        localStorage.setItem('round1CompletedAt', Date.now().toString());
        navigate('/round1result');//////////////////
      } else {
        console.error('Failed to submit answers.');
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
    <>
      <Navbar />
      <div className="quiz-container">
        {questions.length > 0 ? (
          <>
            <div className="question-section">
              <h2 >Question {currentQuestion + 1}</h2>
              <p>{questions[currentQuestion].question}</p>
              <div className="options" style={{margin:'6rem'}}>
                {questions[currentQuestion].choices.map((choice, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(questions[currentQuestion]._id, choice)}
                    className={
                      answers.find(
                        (answer) => answer.questionId === questions[currentQuestion]._id && answer.choice === choice
                      )
                        ? 'selected'
                        : ''
                    }
                    disabled={isTimeUp}
                  >
                    {choice}
                  </button>
                ))}
              </div>
              <div className="navigation-buttons">
                <button className="butt" onClick={handlePrev} disabled={currentQuestion === 0 || isTimeUp}>
                  Previous
                </button>
                <button className="butt" onClick={handleNext} disabled={currentQuestion === questions.length - 1 || isTimeUp}>
                  Next
                </button>
              </div>
            </div>
            <div className="quiz-sidebar">
              <div className="timer">
                Time Left: <div className="timer-time">{formatTime(timeLeft)}</div>
              </div>
              <div className="question-navigator" style={{borderRadius:'50%'}}>
                {questions.map((q, index) => (
                  <button
                    key={q._id}
                    onClick={() => !isTimeUp && setCurrentQuestion(index)}
                    className={`
                      ${currentQuestion === index ? 'active' : ''}
                      ${answeredQuestions[q._id] ? 'answered' : ''}
                    `}
                    disabled={isTimeUp}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <button style={{marginTop:'8rem'}} className="submit-button" onClick={handleSubmit} disabled={isTimeUp}>
                Submit
              </button>
            </div>
          </>
        ) : (
          <p>Loading questions...</p>
        )}
        {isTimeUp && (
          <div className="modal">
            <div className="modal-content">
              <h2>Time's Up!</h2>
              <p>Your answers are being submitted in {modalTimeLeft} seconds...</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Round1;
