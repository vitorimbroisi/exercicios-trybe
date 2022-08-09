import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <ul>{tarefas.map((tarefa) => Task(tarefa))}</ul>
      <ul><Content /></ul>
      <Footer />
    </div>
    
    
  );
}

export default App;
