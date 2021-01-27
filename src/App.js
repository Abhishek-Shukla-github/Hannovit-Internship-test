import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import "./styles/App.css";
function App() {
  return (
    <div className="App root">
      <Navbar/>
      <SearchBar />
    </div>
  );
}

export default App;