import React, {useState} from "react";
import VocabQuizTopControls from "./VocabQuizTopControls";
import VocabQuizPlayZone from "./VocabQuizPlayZone";
import VocabQuizBottomControls from "./VocabQuizBottomControls";

const VocabQuizPlay = (props) => {
    const {gameSettings, quizData} = props;

    const totalWords = quizData.length;
    const [currentIndex, setCurrentIndex] = useState(0);

    const loadNextWord = () => {
        if (currentIndex+1 < totalWords) {
            setCurrentIndex(prevCurrentIndex => prevCurrentIndex+1);
        }
    }

    const loadPrevWord = (e) => {
        const {className} = e.target;
        if (!/button-active/.test(className)) return;
        if (currentIndex > 0) {
            setCurrentIndex(prevCurrentIndex => prevCurrentIndex-1)
        }
    }

    return (
        <div className="VocabQuizPlay">
            <VocabQuizTopControls 
                currentIndex={currentIndex}
                quizData={quizData}
            />
            <VocabQuizPlayZone 
                gameSettings={gameSettings}
                quizData={quizData}
                currentIndex={currentIndex}
                loadNextWord={loadNextWord}
                loadPrevWord={loadPrevWord}
            />
            <VocabQuizBottomControls />
        </div>
    );
}

export default VocabQuizPlay