import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="twelve columns">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="twelve columns">
          <Main />
        </div>
      </div>

    </div>
  );
}

export default App;
