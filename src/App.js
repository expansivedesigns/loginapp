/*Remember how this is written.  Always this.setState(prevState => then return {} in brackets 
  not ()) for the event handler.  Use return() for the render() method only 

  You want the opposite of isLoggedIn to show up when the button is clicked so you need to change
  the previous state to the opposite response  

  Important:  always put handleClick inside the constructor() method

*/

import React from 'react'
import './styles.css'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
          isLoggedIn: false
        }

    this.handleClick = this.handleClick.bind(this)    
    
    }

    handleClick(){
        this.setState(prevState => {
          return {               
              isLoggedIn: !prevState.isLoggedIn
          } 
        })
    }

    render(){
      const displayText = this.state.isLoggedIn ? "I'm logged out" : "I'm logged in"
      const buttonText = this.state.isLoggedIn ? "LOG IN" : "LOG OUT"

        return(
          <div className="App-wrapper">
             <h1 className="App-header">Logging System</h1>
             <h2 className="App-body">{displayText}</h2>
             <button className="App-button" onClick={this.handleClick}>{buttonText}</button>
             <p className="App-footer">Conditional Rendering ReactJS - TaLoveous Goodwin</p>
          </div>
          )
    }
}


export default App
