import React,{createContext,useState,useContext, Children} from 'react'

const NameContext = createContext();

function FunctionalContext() {

    const [name,setName] = useState('Mohib')

    return (
        <NameContext.Provider value={name}>
            <Child />
        </NameContext.Provider>
    )
}

 function Child() {
    return (
        <div className="child">
            <GrandChild/>
        </div>
    )
}

function GrandChild() {
    return (
        <div className="grandchild">
            <Button/>
        </div>
    )
}

function Button() {

    /* Pass NameContext i.e, passing entire object to useContext 
    if we hhave multiple context then we use 
     const context = useContext(contextValue)
     where, contextValue is create Context like NameContext
 */
    const name = useContext(NameContext);

    return (
        <div>
          <button>{name}</button>
        </div>
    )
}

export default FunctionalContext
