import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home />
        <NavBar />
      </header>
      <Profile />
    </div>
  );
}

export default App;
