import "./App.css";
// import Slot from "./components/Slot";
// import SlotRow from "./components/SlotRow";
import Panel from "./components/Panel";
import PlayerSection from "./components/PlayerSection";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player1: {
        id: 1,
        slotStyle: { background: "red", border: "2px solid" },
        playerStyle: { float: "left" }
      },
      player2: {
        id: 2,
        slotStyle: { background: "blue", border: "2px solid" },
        playerStyle: { float: "right" }
      },
      currPlayer: 1,
      isWin: false
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Connect 4</h1>
        {/* <div id="winner"></div> */}
        <PlayerSection
          playerStyle={this.state.player1.playerStyle}
          slotStyle={this.state.player1.slotStyle}
          player={this.state.player1.id}
          active={
            !this.state.isWin && this.state.currPlayer === this.state.player1.id
          }
        />
        <PlayerSection
          playerStyle={this.state.player2.playerStyle}
          slotStyle={this.state.player2.slotStyle}
          player={this.state.player2.id}
          active={
            !this.state.isWin && this.state.currPlayer === this.state.player2.id
          }
        />
        <Panel
          player={
            this.state.currPlayer === 1
              ? this.state.player1
              : this.state.player2
          }
          numOfRows={10}
          numOfCols={8}
          handleDrop={this.handleDrop}
          isWin={this.state.isWin}
        />
      </div>
    );
  }
  handleDrop = isWin => {
    let currPlayerId = this.state.currPlayer;
    let playerSection = document.querySelector(
      `div[class="PlayerSection"][id="${currPlayerId}"] > h1`
    );
    playerSection.classList.remove("active");
    if (isWin) {
      playerSection.parentElement.querySelector(
        `div[class="winner"]`
      ).innerHTML = `<h1>Winner!!!</h1>`;

      this.setState({ isWin: true });
    } else {
      this.setState(({ currPlayer }) => {
        const nextPLayer = currPlayer === 1 ? 2 : 1;
        return { currPlayer: nextPLayer };
      });
    }
  };
  componentDidUpdate() {
    console.log(this.state.isWin);
    const currPlayerId = this.state.currPlayer;
    const playerSection = document.querySelector(
      `div[class="PlayerSection"][id="${currPlayerId}"] > h1`
    );
    playerSection.classList.add("active");
  }
  componentDidMount() {
    const currPlayerId = this.state.currPlayer;
    const playerSection = document.querySelector(
      `div[class="PlayerSection"][id="${currPlayerId}"] > h1`
    );
    playerSection.classList.add("active");
    console.log(playerSection);
  }
}

export default App;
