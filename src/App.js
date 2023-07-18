import SearchEngine from "./SearchEngine";
import Footer from "./Footer";
import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchEngine />
        <Footer />
      </header>
    </div>
  );
}

export default App;
