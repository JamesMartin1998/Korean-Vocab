import React from 'react'

const VocabQuizTopControls = (props) => {
    const {currentIndex} = props;

    return (
        <div className="VocabQuizTopControls">
            {/* 
                Counter / Score
                English to Korean / Korean to English
                Fast Mode (tap) / typing mode
            */}

            <span className='word-count'>
                Word Number: {currentIndex+1}
            </span>
        </div>
    )
}

export default VocabQuizTopControls