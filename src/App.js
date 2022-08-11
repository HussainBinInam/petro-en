import React from 'react';
import './App.scss';
import {Route, Routes} from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homePage/Home';
import ContactUs from './pages/contactUs/contactUs';
import CeoMessage from './pages/CeoMessage/CeoMessage';

import NewsNevents from "./components/NewsNevents/newsNevent";
import Snavbar from "./components/side navagation bar/S-nav-bar";

class App extends React.Component{
  constructor(props){
    super();
    this.state={}
  }
  render(){
    return (
      <div className= "main">
        <Header />
        <Routes>
          <Route exact path='/' element = {<HomePage/>}/>
          <Route path = '/ABOUT-US'/>
          <Route path = '/DIVISIONS' />
          <Route path = '/VISION-&-MISSION'/>
          <Route path = '/CARRERS'/>
          <Route path = '/CONTACT-US' element = {<ContactUs/>}/>
          <Route path = '/CEO-MESSAGE' element={<CeoMessage/>} />
        </Routes>
        <div className= 'sidebar'>
            <Snavbar/>
            <NewsNevents/>
        </div>
      </div>
      
      
    );
  }
}

export default App;
