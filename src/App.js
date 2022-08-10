import React from 'react';
import './App.scss';
import {Route, Routes} from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homePage/Home';
import CeoMessage from './pages/CeoMessage/CeoMessage';

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
          <Route path = '/CONTACTUS'/>
          <Route path = '/CEO-MESSAGE' element={<CeoMessage/>} />
        </Routes>
      </div>

    );
  }
}

export default App;
