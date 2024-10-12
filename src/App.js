import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from './Components/Home/index'
import Profile from './Components/Profile';
import AboutUs from './Components/AboutUs';


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/profile' Component={Profile}/>
        <Route path='/about-us' Component={AboutUs}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
