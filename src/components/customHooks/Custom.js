import React from 'react'
import useKeyPress from './useKeyPress'

function Custom() {

    /* calling custom hook -> useKeyPress(initialValue)
    */
   const userInput =useKeyPress('Hello Man');

    return (
        <div>
            <h1>Feel Free to Type Custom </h1>
            <blockquote>
                {userInput}
            </blockquote>
        </div>
    )
}

export default Custom
