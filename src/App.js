import { LoginButton } from './login';
import { LogoutButton } from './logout';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginButton />
        <LogoutButton />
      </header>
    </div>
  );
}

export default App;
