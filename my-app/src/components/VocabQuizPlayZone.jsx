import React, {useEffect, useState} from 'react';

const VocabQuizPlayZone = (props) => {
    const {gameSettings, quizData, currentIndex, loadNextWord} = props;

    console.log(gameSettings.languageMode);

    const currentWord = gameSettings.languageMode === "koreanToEnglish" ? Object.values(quizData[currentIndex]) : Object.keys(quizData[currentIndex]);
    const currentTranslation = gameSettings.languageMode === "koreanToEnglish" ? Object.keys(quizData[currentIndex]) : Object.values(quizData[currentIndex]);

    const [revealTranslation, setRevealTranslation] = useState(false);

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


            {/* 
                Show the word (maybe the reveal button can be at the bottom of this container, says "reveal" and its text changes to show the word)
            */}
        </div>
    )
}

export default VocabQuizPlayZone;