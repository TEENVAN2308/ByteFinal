import { useEffect, useState } from 'react';
import '../stylesheet/QuestionCard.css';

function QuestionCard(props) {
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        // Retrieve the saved option from localStorage for this question
        const savedOption = window.localStorage.getItem(`selectedOption-${props.questionNumber}`);
        if (savedOption) {
            setSelectedOption(savedOption);
        }
    }, [props.questionNumber]);

    const handleOptionChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);

        // Save the selected option to localStorage
        window.localStorage.setItem(`selectedOption-${props.questionNumber}`, value);
        // console.log("User selected :"+value)
        props.onOptionSelected(props.question,value)
       
    };

    return (
        <div className="card">
            <div className="question p-4">
                Question {props.questionNumber}: {props.question}
            </div>
            <ul className="options mt-5">
                {props.option1 && (
                    <li>
                        <input
                            type="radio"
                            name={`option-${props.questionNumber}`}
                            id={`option1-${props.questionNumber}`}
                            value={props.option1}
                            checked={selectedOption === props.option1}
                            onChange={handleOptionChange}
                        />
                        <label htmlFor={`option1-${props.questionNumber}`}>{props.option1}</label>
                    </li>
                )}
                {props.option2 && (
                    <li>
                        <input
                            type="radio"
                            name={`option-${props.questionNumber}`}
                            id={`option2-${props.questionNumber}`}
                            value={props.option2}
                            checked={selectedOption === props.option2}
                            onChange={handleOptionChange}
                        />
                        <label htmlFor={`option2-${props.questionNumber}`}>{props.option2}</label>
                    </li>
                )}
                {props.option3 && (
                    <li>
                        <input
                            type="radio"
                            name={`option-${props.questionNumber}`}
                            id={`option3-${props.questionNumber}`}
                            value={props.option3}
                            checked={selectedOption === props.option3}
                            onChange={handleOptionChange}
                        />
                        <label htmlFor={`option3-${props.questionNumber}`}>{props.option3}</label>
                    </li>
                )}
                {props.option4 && (
                    <li>
                        <input
                            type="radio"
                            name={`option-${props.questionNumber}`}
                            id={`option4-${props.questionNumber}`}
                            value={props.option4}
                            checked={selectedOption === props.option4}
                            onChange={handleOptionChange}
                        />
                        <label htmlFor={`option4-${props.questionNumber}`}>{props.option4}</label>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default QuestionCard;
