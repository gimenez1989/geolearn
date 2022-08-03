

import React, { useState } from 'react'
import QuizzSelector from './QuizzSelector'
import QuizzGame from './QuizzGame';

const PracticeMain = () => {
    const [quizzOptions, setQuizzOptions] = useState(null);

    const handleQuizzOptions = (options) => {
        setQuizzOptions(options);
    }

    return (
        <div>
            {!quizzOptions && <QuizzSelector handleQuizzOptions={handleQuizzOptions} />}
            {quizzOptions && <QuizzGame quizzOptions={quizzOptions} />}
        </div>
    )
}

export default PracticeMain