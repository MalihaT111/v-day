import React, { useState } from "react";
import './Quiz.css';
import cry from './cry.gif'
import yay from './yay.gif'

const Quiz = () => {
    const questions = [
        {
            question: "When did I start liking you?",
            options: ["immediately", "fall of 2019", "spring 2022", "summer 2022"],
            answers: ["immediately", "fall of 2019", "spring 2022", "summer 2022"]
        },
        {
            question: "Where was our first kiss?",
            options: ["the park", "the library", "the north building", "the movie theater"],
            answers: ["the north building"]
        },
        {
            question: "What’s my least favorite type of music from this list?",
            options: ["kpop", "hip-hop", "rock", "indie"],
            answers: ["hip-hop"]
        },
        {
            question: "Khan’s or Bobby’s?",
            options: ["khan's", "bobbys"],
            answers: ["khan's"]
        },
        {
            question: "What is my favorite memory of us?",
            options: ["first ___ date", "cat cafe", "walking in the dark after school and going out to eat", "when i made you laugh that one time"],
            answers: ["when i made you laugh that one time"]
        },
        {
            question: "What is our song?",
            options: ["hex", "are you bored yet?", "death bed", "best friend"],
            answers: ["hex"]
        },
        {
            question: "What is our favorite pet name?",
            options: ["baby", "sweetie", "honey", "babe"],
            answers: ["baby"]
        },
        {
            question: "What was the first gift I ever gave you?",
            options: ["hinata", "nezuko", "amber", "ninguang"],
            answers: ["hinata"]
        },
        {
            question: "How many donuts did you try to steal from me?",
            options: ["0", "4", "7", "all"],
            answers: ["all"]
        },
        {
            question: "Can cats shoot anal gland discharge onto your face?",
            options: ["yes", "no"],
            answers: ["yes"]
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        const correctAnswers = questions[currentQuestion].answers; // Get the array of correct answers for the current question
    
        // Check if each selected option exists in the array of correct answers
        let isCorrect = false ;
        for (let i = 0; i < correctAnswers.length; i++)
        {
            if (selectedOption === correctAnswers[i])
            {
                isCorrect = true; 
            }
        }

        if (isCorrect) {
            setScore(score + 1); // Increase the score if all selected options are correct
        }
    
        setSelectedOption("");
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowScore(true);
        }
    };
    

    return (
        <div className="quiz-container">
            {showScore ? (
                <div className="result-container">
                    <h2>Your Score: {score} out of {questions.length}</h2>
                {score < 10 ? (
                    <div>
                        <p>What is wrong with you.</p>
                        <img 
                            src={cry} 
                            alt="GIF" 
                            style={{ width: '500px', height: 'auto', cursor: 'pointer', padding: '20px'}} 
                        /> 
                    </div>
                ) : (
                    <div>
                    <p>GOOD JOB BB</p>
                    <img 
                    src={yay} 
                    alt="GIF" 
                    style={{ width: '500px', height: '400px', cursor: 'pointer', padding: '20px'}} 
                /> 
                </div>
                )}
            </div>
            ) : (
                <div className="question-container">
                    <div className="question-text">{questions[currentQuestion].question}</div>
                    <div className="options-container" >
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                className={`option-button ${selectedOption === option ? 'selected' : ''}`}
                                onClick={() => handleOptionClick(option)}
                                
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <button className="next-button" onClick={handleNextQuestion}>Next</button>
                </div>
            )}
        </div>
    );
}

export { Quiz };
