import React ,{useState} from 'react'

function useInput(props) {
  
    const [value, setValue] = useState(props);

  const  handleChange=(event) => {
        setValue(event.target.value)
    }

    return {
        value,
        handleChange
    }
    

}

export default useInput
