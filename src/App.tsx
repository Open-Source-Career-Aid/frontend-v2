import DumbLevel from "./components/DumbLevel";
import "./App.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DumbLevel dumbnessLevel={3} />
      </header>
    </div>
  );
}

export default App;
