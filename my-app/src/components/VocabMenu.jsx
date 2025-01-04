import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const VocabMenu = () => {
    const [quizzesData, setQuizzesData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/assets/data/vocabulary/index.json`);
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
            </div>
        </div>
    );
}

export default VocabMenu;