import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Login, SignUp} from './components'

function App() {
  return (
    <section className="bg  min-h-screen flex items-center justify-center text-center py-12 px-4 sm:px-6 lg:px-8">
      <main className="max-w-lg  w-full  space-y-8">
        <img
          src="/assets/logo.png"
          alt="icansee logo"
          className="w-fix mx-auto pb-2 block"
        />
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </Router>
      </main>
    </section>
  );
}

export default App;
