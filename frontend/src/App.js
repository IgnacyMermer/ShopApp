import './App.css';
import Header from './components/header/main';
import Main from './pages/main'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signing from './pages/signing';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isUserActive } from './store/actions/userActions';

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    if(localStorage.getItem('token')!=null){
      dispatch(isUserActive(localStorage.getItem('token')))
    }
  }, [])

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
