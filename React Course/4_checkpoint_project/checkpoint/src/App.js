import ProgressBar from "./ProgressBar";
import React, {useState} from "react";

function App() {
  const [progress, setProgress] = useState(0);
  function handleProgress() {
    if(progress<100){
      setProgress(progress+10);
    }
    
  }

  function resetProgress() {
    setProgress(0);
  }

  return (
    <div>
      <ProgressBar progress={progress}/>
      <button className="button" onClick={handleProgress} style={{backgroundColor:"green"}}>Increase Progress</button> <br/>
      <button className="button" onClick={resetProgress} style={{backgroundColor:"red"}}>Reset Progress</button>
    </div>
  );
}

export default App;
