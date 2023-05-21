import { useState } from "react";
import "./App.css";
import DefUseCallBack from "./useCallBack/DefUseCallBack";


function App() {
  const [progress, setProgress] = useState(false);

  return (
    <>
      <div className="App">
         <DefUseCallBack />
      </div>
    </>
  );
}

export default App;
