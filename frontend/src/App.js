import './App.css';
import Header from './components/header/main';
import Main from './pages/main'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signing from './pages/signing';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isUserActive } from './store/actions/userActions';
import MyAccount from './pages/myAccount';
import Basket from './pages/Basket'
import ProductsCategory from './pages/ProductsCategory';

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
        <Route path='/my_account' element={<MyAccount/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/products/:id' element={<ProductsCategory/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
