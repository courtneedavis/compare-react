import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Faq from './components/Faq/Faq';
import { Route } from 'react-router-dom';
import './App.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header></Header> 

        <Route exact={true} path="/" component={Home} />
        <Route path="/Faq" component={Faq} />

      <Footer></Footer>
    </div>
  );
}

export default App;
