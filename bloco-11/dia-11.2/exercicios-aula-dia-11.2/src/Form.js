import React from 'react';
import Estado from './Estado';
import TextArea from './TextArea';

class Form extends React.Component{
  constructor() {
    super();
    this.state ={
      teste1: '',
      teste2: '',
      vaiComparecer: false,
      estado: '',
      formularioComErros: false,
    }
  }

  handleErros = () => {
    
  }

// também pode ser escrito assim:
// handleChange = ({target}) => {
//   const { name, value} = target;
// const value = target.type === 'checkbox' ? target.checked : target.value;
  handleChange = (event) => {
    const { name} = event.target;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    this.setState({
      [name]: value,
    })
  }

  render() {
    return(
      <div className='mainDiv'>
        <h1>Formulário aula 11.2</h1>
        <form>
          <Estado value={this.state.estado} handleChange={this.handleChange} />
          <br></br>
          <br></br>
          <TextArea value={this.state.teste1} handleChange={this.handleChange}/>
          <br></br>
          <br></br>
          <label>
            label teste 2:
            <input name='teste2' type='text' value={this.state.teste2} onChange={this.handleChange} />
          </label>
          <br></br>
          <br></br>
          <fieldset>Vai comparecer?
            <input
            name='vaiComparecer' 
            type='checkbox'
            value={this.state.vaiComparecer}
            onChange={this.handleChange}
            />
            </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;