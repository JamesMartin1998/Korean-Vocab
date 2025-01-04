import React, {useState} from "react";
import ErrorMessage from "./ErrorMessage";

const VocabQuizStartScreen = (props) => {
    const {gameSettings, updateGameSettings} = props;
    const [clickedStartGame, setClickedStartGame] = useState(false);

    const handleClick = (e) => {
        updateGameSettings(e);
    }

    const handleStartGameClick = (e) => {
        setClickedStartGame(true);
        if (gameSettings.answerMode && gameSettings.languageMode) {
            // answer and laguage modes selected -> start game
            updateGameSettings(e, true);
        }
    }

    return (
        <div className="VocabQuizStartScreen">
            <h1>Set up game</h1>
            <div className="VocabQuizStartScreen--answer-mode">
                <span>Answer Mode</span>
                <button
                    className={gameSettings.answerMode === "tap" ? "answer-mode-selected" : ""}
                    name="answerMode"
                    value="tap"
                    onClick={handleClick}
                >
                    Tap
                </button>
                <button
                    className={gameSettings.answerMode === "type" ? "answer-mode-selected" : ""}
                    name="answerMode"
                    value="type"
                    onClick={handleClick}
                >
                    Type
                </button>
                {gameSettings.answerMode === null && clickedStartGame && <ErrorMessage mode="answer" />}
            </div>
            <div className="VocabQuizStartScreen--language-mode">
                <span>Language Mode</span>
                <button
                    className={gameSettings.languageMode === "koreanToEnglish" ? "language-mode-selected" : ""}
                    name="languageMode"
                    value="koreanToEnglish"
                    onClick={handleClick}
                >
                    Korean to English
                </button>
                <button
                    className={gameSettings.languageMode === "englishToKorean" ? "language-mode-selected" : ""}
                    name="languageMode"
                    value="englishToKorean"
                    onClick={handleClick}
                >
                    English to Korean
                </button>
                {gameSettings.languageMode === null && clickedStartGame && <ErrorMessage mode="language" />}
            </div>
            <button
                className="VocabQuizStartScreen--start-game"
                onClick={handleStartGameClick}
            >
                Start Game
            </button>
        </div>
    );
}

export default VocabQuizStartScreen;