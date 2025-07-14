import ProgressBar from "./ProgressBar";
import React, {useState} from "react";

function App() {
  const [progress, setProgress] = useState(0);
  const [increaseHovered, setIncreaseHovered] = useState(false)
  const [resetHovered, setResetHovered] = useState(false)

  function handleProgress() {
    if(progress<100){
      setProgress(progress+10);
    }
    
  }

  function resetProgress() {
    setProgress(0);
  }

  function handleIncreaseMouseEnter() {
    setIncreaseHovered(true);
  }

  function handleIncreaseMouseLeave() {
    setIncreaseHovered(false);
  }

  function handleResetMouseEnter() {
    setResetHovered(true);
  }

  function handleResetMouseLeave() {
    setResetHovered(false);
  }

  return (
    <div>
      <ProgressBar progress={progress}/>
      <button className={`increase-button ${increaseHovered? 'hovered':''}`} 
      onClick={handleProgress}
      onMouseEnter={handleIncreaseMouseEnter}
      onMouseLeave={handleIncreaseMouseLeave}>
        Increase Progress
      </button>
      
      <button className={`reset-button ${resetHovered? "hovered":""}`}
      tabIndex="0"
      onClick={resetProgress} 
      onMouseEnter={handleResetMouseEnter}
      onMouseLeave={handleResetMouseLeave}
      style={{marginLeft:"10px"}}>
        Reset Progress
      </button>
    </div>
  );
}

export default App;
