import './App.css';

function App() {
  return (
    <div className="App bg bg-amber-200 w-screen h-screen">
      <h1 className="text-5xl font-bold text-blue-500">Todo App</h1>
      <div>
        <input placeholder='Enter a todo...'/>
        <button>Add</button>
      </div>
    </div>
  );
}

export default App;
