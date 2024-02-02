import ImageContainer from "./ImageContainer";
import LinkContainer from "./LinkContainer";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageContainer />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LinkContainer />
      </header>
    </div>
  );
}

export default App;
