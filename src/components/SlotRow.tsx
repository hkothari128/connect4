import React from "react";
import "./SlotRow.css";
import Slot from "./Slot";

interface Props {
  numOfSlots: number;
  id: number;
  [key: string]: any;
}

function SlotRow(props: Props) {
  const row = Array(props.numOfSlots).fill("");
  console.log(row.length);
  return (
    <div className="SlotRow">
      {row.map((slot, idx) => {
        return (
          <Slot key={idx} id={props.id * row.length + idx + 1} style={{}} />
        );
      })}
    </div>
  );
}

export default SlotRow;
