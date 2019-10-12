import React, { Component, ReactNode } from "react";
import SlotRow from "./SlotRow";
import "./Panel.css";
interface Props {
  numOfRows: number;
  numOfCols: number;
  [key: string]: any;
}
interface State {
  [key: string]: any;
}

class Panel extends Component<Props, State> {
  rows = Array(this.props.numOfRows).fill("");
  render(): ReactNode {
    return (
      <div className="Panel">
        {this.rows.map((_, idx) => {
          return (
            <SlotRow key={idx} id={idx} numOfSlots={this.props.numOfCols} />
          );
        })}
      </div>
    );
  }
}

export default Panel;
