import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import {StarWordsContext} from '../contexts/StarWordsContext';

const VocabMenu = () => {
    const [quizzesData, setQuizzesData] = useState([]);
    const {starWords, updateStarWords} = useContext(StarWordsContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/Korean-Vocab/assets/data/vocabulary/index.json`);
                if (!res.ok) return;
                const data = await res.json();
                setQuizzesData(data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    const links = quizzesData.map((item, index) => (
        <Link key={index} to={`/${item.slug}`}>{item.title}</Link>
    ))

    return (
        <div className="VocabMenu">
            <h1 className="VocabMenu--heading">Choose Vocabulary to Study</h1>
            <div className="VocabMenu--links">
                {links}
                {starWords.length > 0 && <Link to={"/my-star-words"} className="star-words-link">My Star Words</Link>}
            </div>
        </div>
    );
}

export default VocabMenu;