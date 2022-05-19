import React from 'react'
import Navbar from './navbar'; 
import Header from './header';
import {Route,Link} from 'react-router-dom';
import SignUp from './SignUp';
import About from './About';
function App() {
  return (
    <div>
      <Navbar />
      <Header />
     
    </div>
  );
}

 export default App;
