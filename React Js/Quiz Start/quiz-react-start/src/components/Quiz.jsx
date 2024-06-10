import Questions from '../assets/js/questions.js'
import { useState } from 'react';
import QuizTimer from './QuizTimer.jsx';

export default function Quiz(){

    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    const isQuizComplete = activeQuestionIndex === Questions.length;

    function handleAnswer(selectedAnswer){
        setUserAnswers(
            (previusAnswer) =>{
                return [...previusAnswer, selectedAnswer]
            }
        );
    }

    if(isQuizComplete){
        return(
            <>
                <div id="summary">
                    <img src="/src/assets/quiz-complete.png" alt="Quiz Completed"/>
                    <h2>Quiz Complete</h2>
                </div>
            </>
        );
    }

    const shuffleAnswers = [...Questions[activeQuestionIndex].answers.sort((a,b) => 0.5 - Math.random())]

    return(
        <>
        <main>
            <div id="quiz">
                <div id="question">
                    <QuizTimer/>
                    <h2>{Questions[activeQuestionIndex].text}</h2>
                    <ul id="answers">

                        {
                            shuffleAnswers.map((answer)=>
                                <li key={answer} className="answer">
                                    <button onClick={()=>handleAnswer(answer)}>{answer}</button>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </main>
        </>
    );
}