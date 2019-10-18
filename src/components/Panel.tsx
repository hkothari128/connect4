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
    const left = this.getLeftCell(slotRow, slot);
    console.log(left);
    this.props.handleDrop();
  };

  //NOTE: RIGHT: +X direction, DOWN:+Y Direction
  getCell = (
    slotRow: any,
    slot: any,
    xDirection: number,
    yDirection: number
  ) => {
    const targetSlotRow = slotRow.parentNode.getElementsByClassName("SlotRow")[
      parseInt(slotRow.id) + xDirection
    ];

    const targetCell = targetSlotRow.getElementsByClassName("Slot")[
      parseInt(slot.id) + yDirection
    ];
    return targetCell;
  };

  /* getLeftSlotRow = (slotRow: any) => {
    console.log(slotRow.id, "<-------slotrowId");
    const leftSlotRow = slotRow.parentNode.getElementsByClassName("SlotRow")[
      slotRow.id - 1
    ];

    return leftSlotRow;
  }; */

  getLeftCell = (slotRow: any, slot: any) => {
    return this.getCell(slotRow, slot, -1, 0);
  };

  getLeftDownCell = (slotRow: any, slot: any) => {
    return this.getCell(slotRow, slot, -1, +1);
  };

  getLeftUpCell = (slotRow: any, slot: any) => {
    return this.getCell(slotRow, slot, -1, -1);
  };

  getDownCell = (slotRow: any, slot: any) => {
    return this.getCell(slotRow, slot, 0, +1);
  };

  getLeftMost = (slotRow:any,slot:any){
    if(slotRow.id>=0 && slot.id<this.props.numOfRows && this.getLeftCell(slotRow,slot).ID == slot.ID) return this.getLeftMost(this.getLeftCell(slotRow,slot),slot)
  }
  //From Bottom Left to Top right
  // checkWinDiagonalUP= (slotRow: any, slot: any) =>{
  //   while(slotRow.id>=0 && slot.id<this.props.numOfRows && slot.pl)
  // }
}

export default Panel;
