import React from 'react';
import 'background.svg' ;
import Header from './Header';
import Midcon from './MainContent'
import "./App.css"
import Nav from './Nav'
import Footer from './Footer'
import Footerb from './Footerb';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Midcon />
      <Footer />
      <Footerb />
    </div>
  );
}

export default App;
