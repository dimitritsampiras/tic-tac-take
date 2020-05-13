import React from "react";
import classNames from "classnames";
import "./styles/Square.css";

export default function (props) {
  return (
    <button
      className={classNames("square", props.position, props.value)}
      value={props.value}
      onClick={props.clickHandler}
    >
      {props.symbol}
    </button>
  );
}
