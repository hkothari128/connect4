import React from "react";
import "./Slot.css";
interface Props {
  style: object;
  [key: string]: any;
}

function Slot(props: Props) {
  return <div className="Slot" id={props.id}></div>;
}

export default Slot;
