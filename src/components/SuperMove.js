import React from "react";
import classNames from "classnames";
import "./styles/SuperMove.css";

export default function SuperMove(props) {
  return (
    <button
      className={classNames("supermove", props.status)}
      onClick={props.clickHandler}
      value={props.value}
    >
      Super Move: {props.value}
    </button>
  );
}
