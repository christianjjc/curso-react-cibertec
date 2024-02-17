import './App.css';
import Animal from './Components/Animals/Animal';
import Counter from './Components/Counter/Counter';
import CounterCallback from './Components/CounterCallback/CounterCallback';
import CounterReducer from './Components/CounterReducer/CounterReducer';
import Factorial from './Components/Factorial/Factorial';
import Increment from './Components/Increment/Increment';
import Message from './Components/Messages/Message';
import More from './Components/More/More';
import MoreIn from './Components/MoreIn/MoreIn';
import Persona from './Components/Persona/Persona';
import Ref from './Components/Ref/Ref';
import User from './Components/User/User';

function App() {
  return (
    <div className="App">
      <h1>Mi primer proyecto en React</h1>
      <p>Bienvenido a mi primer proyecto en React!!</p>
      <Message message="Hola Mundo" />
      <Animal name="Max" type="Perro" />
      <Persona name="Pedro" />
      <User fullname="Pedro Peralta" />
      <br />
      <br />
      <div>
        <Counter />
      </div>
      <br />
      <div>
        <Increment />
      </div>
      <br />
      <div>
        <More />
      </div>
      <br />
      <div>
        <MoreIn />
      </div>
      <br />
      <div>
        <CounterReducer />
      </div>
      <br />
      <div>
        <CounterCallback />
      </div>
      <br />
      <div>
        <Factorial />
      </div>

      <div>
        <Ref />
      </div>
    </div>
  );
}

export default App;
