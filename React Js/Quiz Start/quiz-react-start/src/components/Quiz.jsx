import Questions from '../assets/js/questions.js'
import { useState } from 'react';

export default function Quiz(){

    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    function handleAnswer(selectedAnswer){
        setUserAnswers(
            (previusAnswer) =>{
                return [...previusAnswer, selectedAnswer]
            }
        );
    }

    return(
        <>
        <main>
            <div id="quiz">
                <div id="question">
                    <h2>{Questions[activeQuestionIndex].text}</h2>
                    <ul id="answers">

                        {
                            Questions[activeQuestionIndex].answers.map((answer)=>
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