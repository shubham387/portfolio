import logo from './logo.svg';
import AuthorInfo from './components/AuthorInfo';
import Header from './components/Header';
import './App.css';
import React from 'react'

function App() {
  return (
    <div className="Container">
      <Header />
      <main>
        <AuthorInfo />
      </main>
    </div>
  );
}

export default App;
