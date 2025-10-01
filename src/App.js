import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homePage/Home";
import AboutUs from "./pages/About-us/about-us";
import QHSE from "./pages/QHSE/QHSE";
import Principals from "./pages/Principals/principals";
import Divisions from "./pages/Divisions/Divisions";
import NetworkandTraining from "./pages/NetworkNTraining/NAT";
import SupplyChain from "./pages/supply chain divission/SupplyChain";
import IES from "./pages/IndustrialEngineeringSolutions/IES";
import EPCC from "./pages/EPCC/EPCC";
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
              <Route path="/ABOUT-US/Principals" element={<Principals />} />
              <Route path="/DIVISIONS" element={<Divisions />} />
              <Route
                path="/DIVISIONS/Networks&Training"
                element={<NetworkandTraining />}
              />
              <Route path="/DIVISIONS/EPCC" element={<EPCC />} />
              <Route
                path="/DIVISIONS/Supply-Chain-Division"
                element={<SupplyChain />}
              />
              <Route
                path="/DIVISIONS/Industrial-Engineering-Solutions"
                element={<IES />}
              />
              <Route path="/VISION-&-MISSION" element={<VissionMission />} />
              <Route path="/CAREERS" element={<Carrers />} />
              <Route path="/CONTACT-US" element={<ContactUs />} />
              <Route path="/CEO-MESSAGE" element={<CeoMessage />} />
            </Routes>
          </div>
          <div className="sidebar">
            <NewsNevents />
            <Snavbar />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
