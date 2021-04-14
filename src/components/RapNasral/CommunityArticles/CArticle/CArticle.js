import React, { useState } from 'react';
import './CArticle.css';
import {useParams} from 'react-router-dom';

function CArticle() {
    const {CA_id} = useParams();

    const questions = [
        {
            questionText: "which color is blue color?",
            questionOptions: [
                {optionText: "red", isCorrect: false},
                {optionText: "green", isCorrect: false},
                {optionText: "yellow", isCorrect: false},
                {optionText: "white", isCorrect: false},
                {optionText: "blue", isCorrect: true},
            ]
        },
        {
            questionText: "who is the Zobor228",
            questionOptions: [
                {optionText: "poo", isCorrect: false},
                {optionText: "pee", isCorrect: false},
                {optionText: "minecraft", isCorrect: false},
                {optionText: "Zobor228", isCorrect: false},
                {optionText: "black mamba", isCorrect: true},
            ]
        },
        {
            questionText: "why roshed 228 is so stupid?",
            questionOptions: [
                {optionText: "because he's poo and pee", isCorrect: false},
                {optionText: "because he doesn't do anything", isCorrect: false},
                {optionText: "because I am poo and pee", isCorrect: false},
                {optionText: "who said I poo", isCorrect: false},
                {optionText: "poo", isCorrect: true},
            ]
        }
    
    ] 
    
    const [questionNumber, setQuestionNumber] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [showQuizResult, setShowQuizResult] = useState(false);

    const handleAnwerClick = (isCorrect) => {
        if (!!isCorrect) {
            setCorrectAnswers(correctAnswers + 1);
        }

        if (questionNumber + 1 < questions.length) {
            setQuestionNumber(questionNumber + 1);
        } else {
            setShowQuizResult(true);
        }

    }

    return (
        <div className="CArticle_wrapper">
            <div className="CArticle_contianer">
                <img src="" alt=""/>
                <h1>some title</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, enim alias quibusdam eaque, ducimus nisi dolorum quas eligendi ipsam amet deserunt nesciunt perferendis, ullam id sint aliquid. Delectus dolores est quas nisi impedit modi hic. Corporis accusantium amet, earum, voluptas provident dolorem porro fuga fugit vero ea molestiae. Unde consequatur eos ducimus dolorem nam fuga autem esse optio, dignissimos, aliquam ipsum quis praesentium, alias quisquam minus? Perferendis porro quos consequatur eligendi sapiente quidem unde voluptatibus iusto autem doloremque dicta repellendus voluptatum animi voluptatem deserunt, assumenda quis soluta atque. Iure veritatis aspernatur, maiores consequatur consequuntur voluptates. Vel, consequatur. At, in animi!</p>
                <div className="CA_quiz">
                    {showQuizResult ? (
                        <div className="CA_quiz_result">your result is {correctAnswers}</div>
                    ) : (
                        <>
                            <div className="CA_quiz_question">{questions[questionNumber].questionText}</div>
                            <div className="CA_quiz_answers">
                                {questions[questionNumber].questionOptions.map((option) => {
                                    return <div onClick={() => handleAnwerClick(option.isCorrect)} className="CA_quiz_answer">{option['optionText']}</div>
                                })}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CArticle;