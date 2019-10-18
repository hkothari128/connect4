import React, { Component, ReactNode } from "react";
import "./SlotRow.css";
import Slot from "./Slot";

interface Props {
  numOfSlots: number;
  id: number;
  [key: string]: any;
}

interface Props {}
interface State {}

class SlotRow extends Component<Props, State> {
  state = {
    row: Array(this.props.numOfSlots).fill(""),
    emptyIdx: this.props.numOfSlots - 1
  };

  render(): ReactNode {
    return (
      <div id={this.props.id.toString()} className="SlotRow">
        <div
          className="dropzone"
          onDrop={this.drop}
          onDragOver={this.allowDrop}
          onDragLeave={this.leaveDrop}
        ></div>
        <div className="Row">
          {this.state.row.map((slot, idx) => {
            return (
              <Slot
                key={idx}
                rowId={this.props.id}
                id={idx}
                style={{}}
                playerID={null}
              />
            );
          })}
        </div>
      </div>
    );
  }

  drop = (e: any) => {
    e.preventDefault();
    // console.log(e.target);
    this.handleDrop(e.target);
    e.target.classList.remove("hovering");
  };

  handleDrop = (target: any) => {
    if (this.state.emptyIdx >= 0) {
      const slotRow = target.parentNode;
      const row = slotRow.getElementsByTagName("div")[1];
      const slot = row.getElementsByClassName("Slot")[this.state.emptyIdx];
      slot.style.background = this.props.player.slotStyle.background;
      slot.playerID = this.props.player.id;
      this.setState({ emptyIdx: this.state.emptyIdx - 1 });
      this.props.handleDrop(slotRow, slot);
    }
  };
  allowDrop = (e: any) => {
    e.preventDefault();
    e.target.classList.add("hovering");
  };

  leaveDrop = (e: any) => {
    e.target.classList.remove("hovering");
  };
}

export default SlotRow;
