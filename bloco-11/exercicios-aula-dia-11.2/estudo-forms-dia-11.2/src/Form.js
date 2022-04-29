import React from 'react';
import './Form.css'

class Form extends React.Component {
  constructor() {
    super();

    this.handleInputNumber = this.handleInputNumber.bind(this);
    this.state = {
      numeroFavorito: '',
      vaiComparecer: false,
      estado: '',
    }
  }

  handleInputNumber({target}) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [name]: value
      
    });
  }

  render () {
    return (
      <div className='div'>
        <h1>Primeiro formulário de estudo!</h1>
        <form>
          <label> Selecione seu estado:
            <select 
              name='estado' 
              value={this.state.estado}
              onChange={this.handleInputNumber}
            >
              
              <option value={'RJ'}>RJ</option>
              <option value={'MG'}>MG</option>
            </select>
          </label>

          <label> Numero da sorte!:
            <input 
              name='numeroFavorito'
              type='number'  
              value={this.state.numeroFavorito}
              onChange={this.handleInputNumber}
            >
          </input>
        </label>

        <label> Vai comparecer?
          <input 
            name='vaiComparecer' 
            type='checkbox' 
            value={this.state.vaiComparecer}
            onChange={this.handleInputNumber}
          >
          </input>
        </label>
        </form>

        <p>O numero favorito é: {this.state.numeroFavorito}</p>
      </div>
    )
  }
}

export default Form;