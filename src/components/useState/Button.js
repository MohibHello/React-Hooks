import React,{useState} from 'react';

//setting state in functional component useState Demo
function Button(props) {

   /*default syntax = const [state, setState] = useState(initialState)
    where, state contatins initialState i.e.,default value
    and setState contains f() which is returned by useState()
   */

   /*check console
   useState returns array [ false,f()]
    */
   console.log(useState(false));
   
   //here we de-structure where text=false and setText=f()
    const [text, setText] = useState(false);

    //setting value based of text using ternary operator
    const buttonText=text?'De-Activate':'Activate'

//function to setText by calling it when button is clicked
function onClick(){
    setText(!text)
}

//functional component must return something....In this Case returns JSX 
    return (
    <button onClick={onClick}>{buttonText}</button>
    )
}

export default Button;