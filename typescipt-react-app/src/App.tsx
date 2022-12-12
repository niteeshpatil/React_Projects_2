import "./App.css";
import Todos from "./components/Todos";
import Newtodo from "./components/Newtodo";
import TodoContextPeovider from "./store/toto-contex";

function App() {
  return (
    <TodoContextPeovider>
      <div className="App">
        <Newtodo></Newtodo>
        <Todos></Todos>
      </div>
    </TodoContextPeovider>
  );
}

export default App;
