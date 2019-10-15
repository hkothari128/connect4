import React from "react";
import "./Coin.css";
interface Props {
  style: Object;
  id: any;
}
const drag = (e: any) => {
  e.dataTransfer.effectAllowed = "copyMove";
  e.dataTransfer.setData("transfer", e.target.id);
  e.target.classList.add("dragging");
};
const noAllowDrop = (e: any) => {
  e.stopPropagation();
};

const dropped = (e: any) => {
  e.target.classList.remove("dragging");
};

function PlayerCoin(props: Props) {
  return (
    <div
      draggable={true}
      onDragStart={drag}
      onDragOver={noAllowDrop}
      onDrop={dropped}
      className="Coin"
      style={props.style}
      id={props.id}
    ></div>
  );
}

export default PlayerCoin;
