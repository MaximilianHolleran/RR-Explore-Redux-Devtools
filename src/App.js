import Counter from './Counter'
import Todo from './Todo'
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Counter</h2>
      <Counter />
      <h2>To Do List</h2>
      <Todo />
    </div>
  );
}

export default App;
