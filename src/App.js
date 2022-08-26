import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homePage/Home";
import AboutUs from "./pages/About-us/about-us";
import QHSE from "./pages/QHSE/QHSE";
import Divisions from "./pages/Divisions/Divisions";
import VissionMission from "./pages/vission&Mission/vission&mission";
import Carrers from "./pages/Carrers/Carrers";
import ContactUs from "./pages/contactUs/contactUs";
import CeoMessage from "./pages/CeoMessage/CeoMessage";

import NewsNevents from "./components/NewsNevents/newsNevent";
import Snavbar from "./components/side navagation bar/S-nav-bar";
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="main">
        <Header />
        <div className="tail">
          <div className="page">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/ABOUT-US" element={<AboutUs />} />
              <Route path="/ABOUT-US/QHSE" element={<QHSE />} />
              <Route path="/ABOUT-US/Principals" />
              <Route path="/DIVISIONS" element={<Divisions />} />
              <Route path="/DIVISIONS/Networks-&-Training" />
              <Route path="/DIVISIONS/EPCC" />
              <Route path="/DIVISIONS/Supply Chain Division" />
              <Route path="/DIVISIONS/Industrial Engineering Solutions" />
              <Route path="/DIVISIONS/Manufacturing" />
              <Route path="/DIVISIONS/Engineering" />
              <Route path="/VISSION-&-MISSION" element={<VissionMission />} />
              <Route path="/CAREERS" element={<Carrers />} />
              <Route path="/CONTACT-US" element={<ContactUs />} />
              <Route path="/CEO-MESSAGE" element={<CeoMessage />} />
            </Routes>
          </div>
          <div className="sidebar">
            <Snavbar />
            <NewsNevents />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
