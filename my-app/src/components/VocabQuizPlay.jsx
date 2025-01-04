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

    return (
        <div className="VocabQuizPlay">
            <VocabQuizTopControls 
                currentIndex={currentIndex}
            />
            <VocabQuizPlayZone 
                gameSettings={gameSettings}
                quizData={quizData}
                currentIndex={currentIndex}
                loadNextWord={loadNextWord}
            />
            <VocabQuizBottomControls />
        </div>
    );
}

export default VocabQuizPlay