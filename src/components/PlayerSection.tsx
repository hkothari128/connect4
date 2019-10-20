import React, { Component, ReactNode } from "react";
// import Slot from "./Slot";
import "./PlayerSection.css";
import PlayerCoin from "./PlayerCoin";

interface Props {
  player: string;
  slotStyle: object;
  playerStyle: object;
  active: boolean;
}
interface State {}

class PlayerSection extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render(): ReactNode {
    // console.log(this.props.player, "<--- Player");
    // console.log(this.props.playerStyle, "this.props.playerStyle");
    // console.log(this.props.slotStyle, "this.props.slotStyle");
    return (
      <div
        id={this.props.player}
        className="PlayerSection"
        style={this.props.playerStyle}
      >
        <h1>Player {this.props.player}</h1>
        <PlayerCoin
          style={this.props.slotStyle}
          id={this.props.player}
          isDraggable={this.props.active}
        />
        <div className="winner"></div>
      </div>
    );
  }
}

export default PlayerSection;
