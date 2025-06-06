import React from "react";
import styles from "./styles"
import { Navbar, Hero, About, Skills, Projects, Contact, Footer } from "./components";



const App = () => {
  return (
    <div className='w-full bg-slate-950 overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
          <Hero />
          <About/>
          <Projects/>
          <Footer/>

        </div>
      </div>
    </div>
  )
}

export default App