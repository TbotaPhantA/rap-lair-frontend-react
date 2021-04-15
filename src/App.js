import './App.css';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RapNasral from './components/RapNasral/RapNasral';
import {BrowserRouter as Router} from 'react-router-dom';

const user = false;

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          {user ? (<RapNasral />) : (<WelcomePage />)}
          <Footer />
        </Router>
    </div>
  );
}

export default App;
