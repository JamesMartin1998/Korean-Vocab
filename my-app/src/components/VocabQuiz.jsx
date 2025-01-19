import React, {useState, useEffect, useContext} from "react";
import { useParams } from 'react-router-dom';
import VocabQuizStartScreen from "./VocabQuizStartScreen";
import VocabQuizPlay from "./VocabQuizPlay";
import {StarWordsContext} from '../contexts/StarWordsContext';

const VocabQuiz = () => {
    const { slug } = useParams();
    const [quizData, setQuizData] = useState([]);
    const [gameSettings, setGameSettings] = useState(
        {
            gameReady: false,
            answerMode: null,
            languageMode: null
        }
    );

    const {starWords, updateStarWords} = useContext(StarWordsContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (/my-star-words/.test(slug)) {
                    setQuizData([...starWords].sort(() => Math.random() - 0.5));
                } else {
                    const res = await fetch(`/Korean-Vocab/assets/data/vocabulary/${slug}.json`);
                    if (!res.ok) return;
                    const data = await res.json();
                    const shuffledData = data.sort(() => Math.random() - 0.5);
                    setQuizData(shuffledData);
                }
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [slug]);

    // update game settings state
    const updateGameSettings = (e, boo) => {
        // start game button clicked
        if (boo) {
            setGameSettings(prevGameSettings => {
                return (
                    {
                        ...prevGameSettings,
                        gameReady: boo
                    }
                )
            })
            return;
        }
        // game settings option button clicked
        const {name, value} = e.target;
        setGameSettings(prevGameSettings => {
            return (
                {
                    ...prevGameSettings,
                    [name]: value // name is square brackets as its value is dynamic
                }
            )
        });
    }

    return (
        <div className="VocabQuiz">
            {
                gameSettings.gameReady === false ? (
                    // Game not ready
                    <VocabQuizStartScreen
                        gameSettings={gameSettings}
                        updateGameSettings={updateGameSettings}
                    />
                ) : (
                    // Game ready
                    <VocabQuizPlay 
                        gameSettings={gameSettings}
                        quizData={quizData}
                    />
                )
            }
        </div>
    );
}

export default VocabQuiz;