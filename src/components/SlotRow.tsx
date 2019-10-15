import React from "react";
import "./SlotRow.css";
import Slot from "./Slot";

interface Props {
  numOfSlots: number;
  id: number;
  [key: string]: any;
}

const drop = e => {
  e.preventDefault();
  console.log(e.target);
  e.target.classList.remove("hovering");
};

const allowDrop = e => {
  e.preventDefault();
  e.target.classList.add("hovering");
};

const leaveDrop = e => {
  e.target.classList.remove("hovering");
};
function SlotRow(props: Props) {
  const row = Array(props.numOfSlots).fill("");
  console.log(row.length);
  return (
    <div className="SlotRow">
      <div
        className="dropzone"
        onDrop={drop}
        onDragOver={allowDrop}
        onDragLeave={leaveDrop}
      ></div>
      <div className="Row">
        {row.map((slot, idx) => {
          return (
            <Slot key={idx} id={props.id * row.length + idx + 1} style={{}} />
          );
        })}
      </div>
    </div>
  );
}

export default SlotRow;
