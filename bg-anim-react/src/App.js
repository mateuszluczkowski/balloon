import "./App.css";
import Animated from "./Animated";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="balloon-animation">
          <Animated
            className="flying-cloud"
            src="/cloud.png"
            ratioX="0.35"
            ratioY="0.36"
          />
          <Animated
            className="flying-cloud"
            src="/cloud.png"
            ratioX="0.2"
            ratioY="0.23"
          />
          <Animated
            className="flying-cloud"
            src="/cloud.png"
            ratioX="0.35"
            ratioY="0.17"
          />
          <Animated
            className="flying-cloud"
            src="/cloud.png"
            ratioX="0.23"
            ratioY="0.27"
          />
          <Animated
            className="flying-cloud"
            src="/cloud.png"
            ratioX="0.14"
            ratioY="0.45"
          />
          <Animated
            className="flying-cloud"
            src="/cloud.png"
            ratioX="0.16"
            ratioY="0.07"
          />
          <Animated
            className="flying-cloud"
            src="/balloon.png"
            ratioX="0.07"
            ratioY="0.36"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
