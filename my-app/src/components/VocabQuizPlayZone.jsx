import React, {useEffect, useState, useContext} from 'react';
import {StarWordsContext} from '../contexts/StarWordsContext';

const VocabQuizPlayZone = (props) => {

    console.log("reloading vocab quiz play zone");

    const {gameSettings, quizData, currentIndex, loadNextWord, loadPrevWord} = props;
    const {starWords, updateStarWords} = useContext(StarWordsContext);

    console.log(">>>starWords", starWords);

    const [currentWord] = gameSettings.languageMode === "koreanToEnglish" ? Object.values(quizData[currentIndex]) : Object.keys(quizData[currentIndex]);

    console.log(">>>currentWord", currentWord);

    const [currentTranslation] = gameSettings.languageMode === "koreanToEnglish" ? Object.keys(quizData[currentIndex]) : Object.values(quizData[currentIndex]);

    const currentStarWordObj = gameSettings.languageMode === "koreanToEnglish" 
        ? { [currentTranslation]: currentWord }
        : { [currentWord]: currentTranslation };

    console.log("current Star Word Obj", currentStarWordObj);

    const [revealTranslation, setRevealTranslation] = useState(false);

    const isStarWord = gameSettings.languageMode === "koreanToEnglish" ? !!starWords.find(obj => obj[currentTranslation]) : !!starWords.find(obj => obj[currentWord]); // update here

    console.log(">>>isStarWord", isStarWord);

    const action = isStarWord ? "remove" : "add";
    console.log(">>>action", action);

    const revealCurrentWord = () => {
        if (revealTranslation === false) setRevealTranslation(true)
    }

    useEffect(() => {
        setRevealTranslation(false);

    }, [currentIndex]);

    return (
        <div className="VocabQuizPlayZone">
            <button
                className='current-word'
                onClick={loadNextWord}
            >
                {currentWord} 
            </button>
            <button
                className={revealTranslation ? 'reveal-word selected' : "reveal-word"}
                onClick={revealCurrentWord}
            >
                {revealTranslation ? currentTranslation : "Reveal Word"}
            </button> 
            
            <div className='prev-star-container'>
                <button
                    className={`prev-word ${currentIndex > 0 ? "button-active" : ""}`}
                    onClick={loadPrevWord}
                >
                    Previous Word
                </button>
                {
                    <i 
                        className={`fa-${isStarWord ? "solid" : "regular"} fa-star`}
                        onClick={() => updateStarWords(action, currentStarWordObj)}
                    >
                    </i>
                }
            </div>

            {/* 
                Show the word (maybe the reveal button can be at the bottom of this container, says "reveal" and its text changes to show the word)
            */}
        </div>
    )
}

export default VocabQuizPlayZone;