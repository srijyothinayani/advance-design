import React from "react";
import "./App.css";
import { BannerContainer } from "./components/BannerContainer/BannerContainer";
import { Footer } from "./components/Footer/Footer";
import { HeaderContainer } from "./components/Header/HeaderContainer";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <HeaderContainer />
        <BannerContainer />
        <div className="d-flex">
          <div className="cards">
            <div className="card">
              <div className="card-content">
                <div>#35D3B4</div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <div className="card-content">
                <div>#1B2191</div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <div className="card-content">
                <div>#D823EE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
