import React, {createContext, useState, useEffect} from "react";

const StarWordsContext = createContext();

const StarWordsProvider = ({children}) => {
    console.log(">>>running starWordsProvider");

    const storedWords = localStorage.getItem("star-words");
    const [starWords, setStarWords] = useState(storedWords ? JSON.parse(storedWords) : []);

    const updateStarWords = (action, word) => {
        const [key] = Object.keys(word);
        console.log(">>>key", key);
        const [value] = Object.values(word);
        console.log(">>>value", value);

        console.log(">>>check", word);
        if (action === "add") {
            setStarWords(prevStarWords => [...prevStarWords, word]);
        } else if (action === "remove") {
            setStarWords(prevStarWords => [...prevStarWords].filter(obj => obj[key] !== value)); // update here
        }
    }

    useEffect(() => {
        localStorage.setItem("star-words", JSON.stringify(starWords));
    }, [starWords]);

    return (
        <StarWordsContext.Provider value={{starWords, updateStarWords}}>
            {children}
        </StarWordsContext.Provider>
    );
}

export { StarWordsContext, StarWordsProvider };