import React, { Component, ReactNode } from "react";
import SlotRow from "./SlotRow";
import "./Panel.css";
// import Slot from "./Slot";
interface Props {
  numOfRows: number;
  numOfCols: number;
  [key: string]: any;
}
interface State {
  [key: string]: any;
}

class Panel extends Component<Props, State> {
  state = {
    slotsToWin: 4
  };
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
              isWin={this.props.isWin}
            />
          );
        })}
      </div>
    );
  }

  handleDrop = (slot: any) => {
    this.props.handleDrop(this.checkWin(slot));
  };

  //CHECK FOR WIN
  checkWin = (slot: any) => {
    if (this.countRightMost(this.getLeftMost(slot)) === this.state.slotsToWin) {
      console.log("WIN");
      this.highlightRight(this.getLeftMost(slot), 0);
      return true;
    }
    if (
      this.countRightUpMost(this.getLeftDownMost(slot)) ===
      this.state.slotsToWin
    ) {
      console.log("WIN");
      this.highlightRightUp(this.getLeftDownMost(slot), 0);
      return true;
    }
    if (
      this.countRightDownMost(this.getLeftUpMost(slot)) ===
      this.state.slotsToWin
    ) {
      console.log("WIN");
      this.highlightRightDown(this.getLeftUpMost(slot), 0);
      return true;
    }
    if (this.countUpMost(this.getDownMost(slot)) === this.state.slotsToWin) {
      console.log("WIN");
      this.highlightUp(this.getDownMost(slot), 0);
      return true;
    }
  };

  //GETTING CELL AND SLOT ROW

  getSlotRowForSlot = (slot: any) => {
    const slotRow = slot.parentNode.parentNode;
    return slotRow;
  };
  //NOTE: RIGHT: +X direction, DOWN:+Y Direction
  getCell = (slot: any, xDirection: number, yDirection: number) => {
    const slotRow = this.getSlotRowForSlot(slot);
    const targetSlotRow = slotRow.parentNode.getElementsByClassName("SlotRow")[
      parseInt(slotRow.id) + xDirection
    ];

    const targetCell = targetSlotRow.getElementsByClassName("Slot")[
      parseInt(slot.id) + yDirection
    ];
    return targetCell;
  };

  // GETTING CELLS FROM VARIOUS DIRECTIONS
  getLeftCell = (slot: any) => {
    return this.getCell(slot, -1, 0);
  };
  getRightCell = (slot: any) => {
    return this.getCell(slot, +1, 0);
  };

  getLeftDownCell = (slot: any) => {
    return this.getCell(slot, -1, +1);
  };
  getRightUpCell = (slot: any) => {
    return this.getCell(slot, +1, -1);
  };

  getLeftUpCell = (slot: any) => {
    return this.getCell(slot, -1, -1);
  };
  getRightDownCell = (slot: any) => {
    return this.getCell(slot, +1, +1);
  };

  getDownCell = (slot: any) => {
    return this.getCell(slot, 0, +1);
  };
  getUpCell = (slot: any) => {
    return this.getCell(slot, 0, -1);
  };

  //GETTING CELLS FROM EXTREMES
  getLeftMost = (slot: any) => {
    if (
      this.getSlotRowForSlot(slot).id > 0 &&
      this.getLeftCell(slot).playerID === slot.playerID
    )
      return this.getLeftMost(this.getLeftCell(slot));

    return slot;
  };
  getLeftDownMost = (slot: any) => {
    if (
      slot.id < this.props.numOfCols - 1 &&
      this.getSlotRowForSlot(slot).id > 0 &&
      this.getLeftDownCell(slot).playerID === slot.playerID
    ) {
      return this.getLeftDownMost(this.getLeftDownCell(slot));
    }

    return slot;
  };

  getLeftUpMost = (slot: any) => {
    if (
      slot.id > 0 &&
      this.getSlotRowForSlot(slot).id > 0 &&
      this.getLeftUpCell(slot).playerID === slot.playerID
    ) {
      return this.getLeftUpMost(this.getLeftUpCell(slot));
    }

    return slot;
  };

  getDownMost = (slot: any) => {
    if (
      slot.id < this.props.numOfCols - 1 &&
      this.getDownCell(slot).playerID === slot.playerID
    ) {
      return this.getDownMost(this.getDownCell(slot));
    }

    return slot;
  };

  //COUNTING MATCHING CELLS IN A ROW(ANY DIRECTION)
  countRightMost = (slot: any) => {
    if (
      this.getSlotRowForSlot(slot).id < this.props.numOfRows - 1 &&
      this.getRightCell(slot).playerID === slot.playerID
    )
      return this.countRightMost(this.getRightCell(slot)) + 1;

    return 1;
  };

  countRightUpMost = (slot: any) => {
    if (
      slot.id > 0 &&
      this.getSlotRowForSlot(slot).id < this.props.numOfRows - 1 &&
      this.getRightUpCell(slot).playerID === slot.playerID
    ) {
      return this.countRightUpMost(this.getRightUpCell(slot)) + 1;
    }

    return 1;
  };

  countRightDownMost = (slot: any) => {
    if (
      slot.id < this.props.numOfCols - 1 &&
      this.getSlotRowForSlot(slot).id < this.props.numOfRows - 1 &&
      this.getRightDownCell(slot).playerID === slot.playerID
    ) {
      return this.countRightDownMost(this.getRightDownCell(slot)) + 1;
    }

    return 1;
  };

  countUpMost = (slot: any) => {
    if (slot.id > 0 && this.getUpCell(slot).playerID === slot.playerID) {
      return this.countUpMost(this.getUpCell(slot)) + 1;
    }

    return 1;
  };

  // Highlighting cells that won
  highlightRight = (slot: any, count: number) => {
    slot.classList.add("Winner");
    if (count + 1 === this.state.slotsToWin) return;
    this.highlightRight(this.getRightCell(slot), count + 1);
  };

  highlightRightUp = (slot: any, count: number) => {
    slot.classList.add("Winner");
    if (count + 1 === this.state.slotsToWin) return;
    this.highlightRightUp(this.getRightUpCell(slot), count + 1);
  };

  highlightRightDown = (slot: any, count: number) => {
    slot.classList.add("Winner");
    if (count + 1 === this.state.slotsToWin) return;
    this.highlightRightDown(this.getRightDownCell(slot), count + 1);
  };

  highlightUp = (slot: any, count: number) => {
    slot.classList.add("Winner");
    if (count + 1 === this.state.slotsToWin) return;
    this.highlightUp(this.getUpCell(slot), count + 1);
  };

  //From Bottom Left to Top right
  // checkWinDiagonalUP= (slotRow: any, slot: any) =>{
  //   while(slotRow.id>=0 && slot.id<this.props.numOfRows && slot.pl)
  // }
}

export default Panel;
