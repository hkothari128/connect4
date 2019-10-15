import React from "react";
import "./Slot.css";
interface Props {
  style: object;
  [key: string]: any;
}

const drag = e => {
  e.dataTransfer.effectAllowed = "copyMove";
  e.dataTransfer.setData("transfer", e.target.id);
  e.target.classList.add("dragging");
};
const noAllowDrop = e => {
  e.stopPropagation();
};

const dropped = e => {
  e.target.classList.remove("dragging");
};

function Slot(props: Props) {
  return (
    <div
      draggable={true}
      onDragStart={drag}
      onDragOver={noAllowDrop}
      onDrop={dropped}
      className="Slot"
      style={props.style}
      id={props.id}
    ></div>
  );
}

export default Slot;
