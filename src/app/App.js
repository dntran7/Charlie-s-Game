"use client";
import { useState } from 'react'

import Game from '../components/CardGame'
import WelcomePage from '../components/WelcomePage'
 
function App() {
  const title = "Charlie's Game";
  const [showWelcome, setShowWelcome] = useState(true);
  function handleClick(){
     setShowWelcome(false);
  }
  return (
    <div className="App">
      { showWelcome ? <WelcomePage handleClick={handleClick} /> : 
      (<div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl header-center header-bottom-padding"> {title} </h1> 
        <Game />
      </div>)
      }
    </div>
  );
}

export default App;