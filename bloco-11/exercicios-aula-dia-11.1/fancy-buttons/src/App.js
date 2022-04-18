import React from 'react';
import './App.css';


// function App() {
class App extends React.Component {
  
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this);
    this.handleClickBtn2 = this.handleClickBtn2.bind(this);
    this.handleClickBtn3 = this.handleClickBtn3.bind(this);

    this.state = {
      numeroDeCliques: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }
    
  }
  handleClick() {
    // console.log('clicou!');
    // console.log(this);
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }
  
  handleClickBtn2 () {
    // console.log('clicou no botão 2');
    // console.log(this);
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }))
  }
  
  handleClickBtn3 () {
    // console.log('clicou no botão 3');
    // console.log(this);
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
    }))
  }

  getBtnColor(num) {
    return num % 2 === 0 ? 'green' : 'white'; 
  }

  render () {
    const { numeroDeCliques, numeroDeCliques2, numeroDeCliques3 } = this.state;
      return (
    <div>r
      <button onClick={this.handleClick} style={ {backgroundColor: this.getBtnColor(numeroDeCliques)} } >Counter click {this.state.numeroDeCliques}</button>
      <button onClick={this.handleClickBtn2} style={{ backgroundColor: this.getBtnColor(numeroDeCliques2) }} >Botão 2 {this.state.numeroDeCliques2} </button>
      <button onClick={this.handleClickBtn3} style={{ backgroundColor: this.getBtnColor(numeroDeCliques3) }} >Botão 3 {this.state.numeroDeCliques3} </button>
    </div>
      )
  }
}

export default App;
