import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Button from './components/UI/button/Button';
import Login from './components/login/Login';

function App() {
  return (
    <div className="app">
      <Header />
      <Login />
    </div>
  );
}

export default App;
