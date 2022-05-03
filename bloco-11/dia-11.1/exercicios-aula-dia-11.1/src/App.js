import React from 'react';
import './App.css';

class App extends React.Component{
  constructor() {
    super()

    this.state = {
      clicks: 0,
      clicks2: 0,
      clicks3: 0,
    }
  }

  handleClick = () => {
    this.setState((prevState, _props) => ({
      clicks: prevState.clicks + 1
    }))
    console.log(this.handleBtnColor(this.state.clicks));
  }

  handleClick2 = () => {
    this.setState((prevState, _props) => ({
      clicks2: prevState.clicks2 + 1
    }))
    // console.log(this.state.clicks);
  }

  handleClick3 = () => {
    this.setState((prevState, _props) => ({
      clicks3: prevState.clicks3 + 1,
    }))
  }

  handleBtnColor = (number) => number % 2 === 0 ? 'green' : 'white';

  render() {
    return(
      <div>
        <button 
          onClick={this.handleClick}
          style={{backgroundColor: this.handleBtnColor(this.state.clicks)}}
        >
          Numero de cliques: {this.state.clicks}
        </button>
        <button 
          onClick={this.handleClick2}
          style={{backgroundColor: this.handleBtnColor(this.state.clicks2)}}
        >
          Numero de cliques do botão 2: {this.state.clicks2}
        </button>
        <button 
          onClick={this.handleClick3}
          style={{backgroundColor: this.handleBtnColor(this.state.clicks3)}}
        >
          Numero de cliques do botão 3: {this.state.clicks3}
        </button>
      </div>
    );
  }
}

export default App;
