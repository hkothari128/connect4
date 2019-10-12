import React from "react";
import "./Slot.css";
interface Props {
  style: object;
  [key: string]: any;
}

function Slot(props: Props) {
  return (
    <div
      className="Slot"
      style={props.style}
      onClick={() => {
        console.log(props.id);
      }}
    ></div>
  );
}

export default Slot;
