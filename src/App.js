import React from "react";

import "./App.css";
// import Slot from "./components/Slot";
// import SlotRow from "./components/SlotRow";
import Panel from "./components/Panel";
import PlayerSection from "./components/PlayerSection";

function App() {
  return (
    <div className="App">
      <h1>Connect 4</h1>
      <PlayerSection
        playerStyle={{ float: "left" }}
        style={{ background: "red", border: "2px solid" }}
        player="1"
      />
      <PlayerSection
        playerStyle={{ float: "right" }}
        style={{ background: "blue", border: "2px solid" }}
        player="2"
      />
      <Panel numOfRows={8} numOfCols={10} />
    </div>
  );
}

export default App;
