import React,{Component,createContext} from 'react'

//create a Component called NameContext by using createContext() 
const NameContext = createContext();

/*
    From ParentApp component i want to pass this.state to Button component
    which is child of GrandChild and it is Child of Child again which is child of
    ParentApp 

    instead of passing state as props to all the child and sub-child 
    we can directly pass that parent state to sub-child by using context

    React Context:

    in above line 4 we created NameContext = createContext()
    now, NameContext is a object which has 2 mainly used properties
    Consumer And Provider

    Provider - In Parent we will use NameContext.Provider becuz
                we want to pass state to any nested children in
                the component Tree. i.e., provider is one who provide like setter 

    Consumer - Any component who want receive state from parent we use
                <NameContext.Consumer> and we pass that function where
                the argument represents the information

*/
export class ParentApp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'mohib'
        }
    }

    //enclose the Component using Context.Provider and pass state as value
    render() {
        return (
            <NameContext.Provider value={this.state.name}>
            <div>
                <Child/>
            </div>
            </NameContext.Provider>
        )
    }
}

class Child extends React.Component {
    render() {
        return (
           <section className='child'>
               <GrandChild/>
           </section>
        )
    }
}


class GrandChild extends Component {
    render() {
        return (
          <div class="grandchild">
              <Button/>
          </div>
        )
    }
}

class Button extends Component {

    //enclose the Component who want to receive the grand-parent state as
    //props using Context.Consumer and within {} pass that function where
    //the argument represents the information
    render() {
        return (
          <NameContext.Consumer> 
              {
                  name => <button>{name}</button>
              }
          </NameContext.Consumer>
        )
    }
}


export default ParentApp



