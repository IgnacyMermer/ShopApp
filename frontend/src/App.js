import './App.css';
import Header from './components/header/main';
import Main from './pages/main'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signing from './pages/signing';

function App() {
  return (
    <div className="App">
      <Router>
      <header>
        <Header/>
      </header>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/signing' element={<Signing/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
