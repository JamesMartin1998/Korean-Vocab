import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';

const GrammarLesson = () => {
    const { slug } = useParams();
    const [lessonData, setLessonData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/Korean-Vocab/assets/data/grammar/${slug}.json`);
                if (!res.ok) return;
                const data = await res.json();
                setLessonData(data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [slug]);

    console.log(">>>", lessonData);

    return (
        <div className="GrammarLesson">
            {/* <h1 className="lesson-title">{lessonData.title}</h1> */}
            {/* {
                lessonData.content && lessonData.content.map((item, index) => {
                    if (item.type === "paragraph") { // paragraphs
                        return (
                            <p key={index}>
                                {item.text.map((textItem, i) => (
                                    textItem.bold ? <span key={i} className="special-word">{textItem.words}</span> : 
                                    <React.Fragment key={i}>{textItem.words}</React.Fragment>
                                ))}
                            </p>
                        )
                    } 
                    else if (item.type === "example-heading") { // headings
                        return (
                            <h3 className="lesson-example-heading" key={index}>
                                {item.text}
                            </h3>
                        )
                    }
                    else if (item.type === "grammar") { // grammar structures
                        return (
                            <h2 className="lesson-grammar" key={index}>
                                {item.text}
                            </h2>
                        )
                    }
                    else if (item.type === "orderedList") { // ordered lists
                        return (
                            <ol key={index}>
                                {item.items.map((listItem, i) => (
                                    <li key={i}>
                                        {listItem.map((textItem, j) => (
                                            textItem.bold ? <span key={j} className="special-word">{textItem.words}</span> : 
                                            <React.Fragment key={j}>{textItem.words}</React.Fragment>
                                        ))}
                                    </li>
                                ))}
                            </ol>
                        )
                    } 
                    else if (item.type === "unOrderedList") { // unordered lists
                        return (
                            <ul key={index}>
                                {item.items.map((listItem, i) => (
                                    <li key={i}>
                                        {listItem.map((textItem, j) => (
                                            textItem.bold ? <span key={j} className="special-word">{textItem.words}</span> : 
                                            <React.Fragment key={j}>{textItem.words}</React.Fragment>
                                        ))}
                                    </li>
                                ))}
                            </ul>
                        )
                    } else if (item.type === "example") { // example
                        return (
                            <p key={index} className="lesson-example">
                                {item.items.map((translationItem, i) => (
                                    <React.Fragment key={i}>
                                        <span className={`lesson-${translationItem.type}`}>
                                        {translationItem.text.map((textItem, j) => (
                                            textItem.bold ? <span key={j} className="special-word">{textItem.words}</span> : 
                                            <React.Fragment key={j}>{textItem.words}</React.Fragment>
                                        ))}
                                        </span>
                                        {i === 0 && <br/>}
                                    </React.Fragment>
                                ))}
                            </p>
                        )
                    }
                })
            } */}












            {lessonData.content && lessonData.content.map((item, index) => {
                if (item.nodeType === "heading-1") {
                    return (
                        <h1 key={index} className="lesson-title">
                            {item.content.map((subContent, i) => {
                                if (subContent.nodeType === "text") {
                                    return <React.Fragment key={i}>{subContent.value}</React.Fragment>
                                }
                            })}
                        </h1>
                    )
                }
                else if (item.nodeType === "heading-2") {
                    return (
                        <h2 key={index} className="lesson-grammar">
                            {item.content.map((subContent, i) => {
                                if (subContent.nodeType === "text") {
                                    return <React.Fragment key={i}>{subContent.value}</React.Fragment>
                                }
                            })}
                        </h2>
                    )
                }
                else if (item.nodeType === "heading-3") {
                    return (
                        <h3 key={index} className="lesson-example-heading">
                            {item.content.map((subContent, i) => {
                                if (subContent.nodeType === "text") {
                                    return <React.Fragment key={i}>{subContent.value}</React.Fragment>
                                }
                            })}
                        </h3>
                    )
                }
                else if (item.nodeType === "heading-4") {
                    return (
                        <h4 key={index}>
                            {item.content.map((subContent, i) => {
                                if (subContent.nodeType === "text") {
                                    return <React.Fragment key={i}>{subContent.value}</React.Fragment>
                                }
                            })}
                        </h4>
                    )
                }
                else if (item.nodeType === "heading-5") {
                    return (
                        <h5 key={index}>
                            {item.content.map((subContent, i) => {
                                if (subContent.nodeType === "text") {
                                    return <React.Fragment key={i}>{subContent.value}</React.Fragment>
                                }
                            })}
                        </h5>
                    )
                }
                else if (item.nodeType === "heading-6") {
                    return (
                        <h6 key={index}>
                            {item.content.map((subContent, i) => {
                                if (subContent.nodeType === "text") {
                                    return <React.Fragment key={i}>{subContent.value}</React.Fragment>
                                }
                            })}
                        </h6>
                    )
                }
                else if (item.nodeType === "paragraph") {
                    return (
                        <p key={index}>
                            {item.content.map((subContent, i) => {
                                if (subContent.nodeType === "text") {
                                    return (subContent.marks.some(mark => mark.type === "bold") ?
                                        <span key={i} className="special-word">{subContent.value}</span> : 
                                        <React.Fragment key={i}>{subContent.value}</React.Fragment>
                                    )
                                }
                            })}
                        </p>
                    )
                }
            })}

















        </div>
    )
}

export default GrammarLesson