import './App.css';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RapNasral from './components/RapNasral/RapNasral';

const user = true;

function App() {
  return (
    <div className="App">
        <Header />
        {user ? (<RapNasral />) : (<WelcomePage />)}
        <Footer />
    </div>
  );
}

export default App;
