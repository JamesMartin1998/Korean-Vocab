import React, {useState, useEffect, useContext} from "react";
import {StarWordsContext} from '../contexts/StarWordsContext';
import MenuLink from "./MenuLink";
import Menu from "./Menu";

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

    let links = quizzesData.map((item) => (
        <MenuLink 
            key={item.slug}
            slug={item.slug}
            title={item.title}
        />
    ));

    if (starWords.length) {
        links = [
            ...links,
            <MenuLink
                key="my-star-words"
                slug="/my-star-words"
                title="My Star Words"
                extraClass="star-words-link"
            />
        ];
    }

    return (
        // <div className="VocabMenu">
        //     <h1 className="VocabMenu--heading">Choose Vocabulary to Study</h1>
        //     <div className="VocabMenu--links">
        //         {links}
        //     </div>
        // </div>
        <Menu
            title="Choose Vocabulary to Study"
            links={links}
        />
    );
}

export default VocabMenu;