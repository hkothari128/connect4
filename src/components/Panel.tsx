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
            <SlotRow
              player={this.props.player}
              key={idx}
              id={idx}
              numOfSlots={this.props.numOfCols}
              handleDrop={this.handleDrop}
            />
          );
        })}
      </div>
    );
  }

  handleDrop = (slotRow: any, slot: any) => {
    console.log(slotRow, slot);
    this.getLeftCell(slotRow, slot);

    this.props.handleDrop();
  };

  getLeftSlotRow = (slotRow: any) => {
    console.log(slotRow.id, "<-------slotrowId");
    const leftSlotRow = slotRow.parentNode.getElementsByClassName("SlotRow")[
      slotRow.id - 1
    ];

    return leftSlotRow;
  };

  getLeftCell = (slotRow: any, slot: any) => {
    const leftSlotRow = this.getLeftSlotRow(slotRow);
    const leftCell = leftSlotRow.getElementsByClassName("Slot")[slot.id];
    return leftCell;
  };

  getLeftDownCell = (slotRow: any, slot: any) => {
    const leftSlotRow = this.getLeftSlotRow(slotRow);
    const leftDownCell = leftSlotRow.getElementsByClassName("Slot")[
      slot.id + 1
    ];
    return leftDownCell;
  };

  getLeftUpCell = (slotRow: any, slot: any) => {
    const leftSlotRow = this.getLeftSlotRow(slotRow);
    const leftUpCell = leftSlotRow.getElementsByClassName("Slot")[slot.id - 1];
    return leftUpCell;
  };

  getDownCell = (slotRow: any, slot: any) => {
    const leftUpCell = slotRow.getElementsByClassName("Slot")[slot.id + 1];
    return leftUpCell;
  };
}

export default Panel;
