import React, { Component, ReactNode } from "react";
import Slot from "./Slot";
import "./PlayerSection.css";

interface Props {
  player: string;
  style: object;
  playerStyle: object;
}
interface State {}

class PlayerSection extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render(): ReactNode {
    console.log(this.props.player, "<--- Player");
    console.log(this.props.playerStyle, "this.props.playerStyle");
    console.log(this.props.style, "this.props.style");
    return (
      <div className="PlayerSection" style={this.props.playerStyle}>
        <h1>Player {this.props.player}</h1>
        <Slot style={this.props.style} id={this.props.player} />
      </div>
    );
  }
}

export default PlayerSection;
