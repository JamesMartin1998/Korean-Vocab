import React from 'react'

const VocabQuizTopControls = (props) => {
    const {currentIndex, quizData} = props;

    return (
        <div className="VocabQuizTopControls">
            {/* 
                Counter / Score
                English to Korean / Korean to English
                Fast Mode (tap) / typing mode
            */}

            <span className='word-count'>
                Word Number: {currentIndex+1} of {quizData.length}
            </span>
        </div>
    )
}

export default VocabQuizTopControls