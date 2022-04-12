import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );

}

const tarefas = ['React', 'JSX', 'HTML', 'CSS'];

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <section> { tarefas.map((value) => Task(value)) } </section>
        <Content />
        <Footer />
      </div>
        
    );
  }
}

export default App;
