import React, {useRef, useState} from "react"

import Header from './components/Header';
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="main">
      <article className="card">
        <Header />
        <div className="wrapper">
          <Section />
          <Footer />
        </div>  
      </article>
    </main>
  )
}

export default App
