import React, {useState,useEffect} from 'react'

function UseEffectEventListener() {

        const [userInput, setUserInput] = useState('')

        const handleEvent=(event)=>{
            const {key,keyCode} = event

            //keycode is like Char, simple condition every key in keyboard has code
            if(keyCode ===32 || (keyCode>=65 && keyCode<=90)) {
                //setting old and new value like concatination
                setUserInput(`${userInput}${key}`)
            }
        }


        //will be called everytime on state change and re-render 
        useEffect(() => {
            //Effect
            window.addEventListener('keydown',handleEvent)

            return (() =>{
                //clean up Effect
                window.removeEventListener('keydown',handleEvent)
            })
        })

       

    return (
        <div>
            <h1>Feel Free to Type </h1>
            <blockquote>
                {userInput}
            </blockquote>
        </div>
    )
}

export default UseEffectEventListener
