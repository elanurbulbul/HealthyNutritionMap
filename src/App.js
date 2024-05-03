import React from "react";
import "./App.css";
import "./style/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Route from "./components/Routes/Route";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <main>
          <Route />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
