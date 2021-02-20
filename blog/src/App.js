import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home />
      </header>
      <Profile/>
    </div>
  );
}

export default App;
