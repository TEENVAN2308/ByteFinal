import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Round1.css';
import Navbar from '../../components/navbar';
const dummyQuestions = [
  { id: 1, question: "What is 2+2?", options: ["3", "4", "5", "6"] },
  { id: 2, question: "What is the capital of France?", options: ["London", "Berlin", "Paris", "Madrid"] },
  { id: 3, question: "What is the largest planet in our solar system?", options: ["Earth", "Jupiter", "Mars", "Saturn"] },
  { id: 4, question: "Which element has the chemical symbol 'O'?", options: ["Oxygen", "Osmium", "Oganesson", "Oxide"] },
  { id: 5, question: "How many continents are there?", options: ["5", "6", "7", "8"] },
  { id: 6, question: "What is the boiling point of water?", options: ["50°C", "75°C", "90°C", "100°C"] },
  { id: 7, question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "Thailand", "India"] },
  { id: 8, question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "J.K. Rowling"] },
  { id: 9, question: "What is the chemical symbol for Gold?", options: ["Au", "Ag", "Fe", "Cu"] },
  { id: 10, question: "Which planet is known as the Red Planet?", options: ["Earth", "Venus", "Mars", "Mercury"] },
  { id: 11, question: "What is the smallest prime number?", options: ["0", "1", "2", "3"] },
  { id: 12, question: "In which year did World War I begin?", options: ["1914", "1918", "1939", "1945"] },
  { id: 13, question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Arctic", "Pacific"] },
  { id: 14, question: "What is the capital city of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"] },
  { id: 15, question: "What is the hardest natural substance on Earth?", options: ["Gold", "Diamond", "Iron", "Graphite"] },
  { id: 16, question: "Who was the first man to walk on the moon?", options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"] },
  { id: 17, question: "Which country is the Eiffel Tower located in?", options: ["Spain", "Italy", "Germany", "France"] },
  { id: 18, question: "What is the most abundant gas in the Earth's atmosphere?", options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"] },
  { id: 19, question: "Which mammal is known for laying eggs?", options: ["Kangaroo", "Whale", "Echidna", "Platypus"] },
  { id: 20, question: "Which is the largest bone in the human body?", options: ["Femur", "Tibia", "Fibula", "Humerus"] },
  // { id: 21, question: "What is the main ingredient in guacamole?", options: ["Tomato", "Avocado", "Lime", "Onion"] },
  // { id: 22, question: "Which country is home to the kangaroo?", options: ["India", "New Zealand", "Australia", "South Africa"] },
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
      const teamName=localStorage.getItem("teamName");
      const response = await fetch('http://localhost:3000/api/questions/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          answers:answers,
          teamName:teamName,
          round:1,
        }),
      });
      if (response.ok) {
        console.log('Answers submitted successfully!');
        localStorage.setItem('round1Completed', 'true');
        localStorage.setItem('round1CompletedAt', Date.now().toString());
        navigate('/about2');
      } else {
        console.error('Failed to submit answers. Please try again.');
        localStorage.setItem('round1Completed', 'true');
        localStorage.setItem('round1CompletedAt', Date.now().toString());
        navigate('/about2');
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
   
    <Navbar/>
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
          <button  className="butt" onClick={handlePrev} disabled={currentQuestion === 0 || isTimeUp}>Previous</button>
          <button className="butt"   onClick={handleNext} disabled={currentQuestion === dummyQuestions.length - 1 || isTimeUp}>Next</button>
        </div>
      </div>
      <div className="quiz-sidebar">
        <div className="timer">Time Left : <div className="timer-time">{formatTime(timeLeft)}</div></div>
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
    </>
  );
}

export default Round1;