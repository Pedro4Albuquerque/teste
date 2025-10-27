import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';
import MyComponent from './components/MyComponent';
import Event from './components/Event';
import Challenge from './components/Challenge';
function App() {
  return (
    <div className="App">
      <h1>Fundamentos do React</h1>
      <h2>Não sei o que colocar desculpa</h2>
      <p>Fazendo para a tarefa</p>
      <FirstComponent></FirstComponent>
      <TemplateExpression />      
      <Event/>
      <Challenge/>
    </div>
  );
}

export default App;
