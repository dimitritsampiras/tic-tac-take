import React from "react";
import Square from "./Square";
import SuperMove from "./SuperMove";
import playMove from "../logic/playMove";
import "./styles/Board.css";
import calculateWinner from "../logic/calculateWinner";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      turn: "X",
      xSuperOn: false,
      oSuperOn: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.setSuperX = this.setSuperX.bind(this);
  }

  handleClick(e) {
    this.setState(playMove(this.state, e));
  }

  setSuperX(e) {
    let { xSuperOn, turn } = this.state;
    if (turn === "X" && !xSuperOn) {
      this.setState({
        turn: "O",
        xSuperOn: true,
      });
    }
  }

  setSuperO(e) {
    let { oSuperOn, turn } = this.state;
    if (turn == "O" && !oSuperOn) {
      this.setState({
        turn: "X",
        oSuperOn: true,
      });
    }
  }

  renderSquare(i) {
    return (
      <Square
        value={i}
        symbol={this.state.board[i]}
        clickHandler={(e) => this.handleClick(e)}
      />
    );
  }

  render() {
    let { turn, xSuperOn, oSuperOn, board } = this.state;
    let status = calculateWinner(board);
    return (
      <div className="game-container">
        <div className="board">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        {status ? <div className="turn">Winner: {status}</div> : <div className="turn">Turn: {turn}</div>}
        <div className="supermove-container">
          <SuperMove
            value="X"
            status={xSuperOn ? "on" : "off"}
            clickHandler={(e) => this.setSuperX(e)}
          />
          <SuperMove
            value="O"
            status={oSuperOn ? "on" : "off"}
            clickHandler={(e) => this.setSuperO(e)}
          />
        </div>
      </div>
    );
  }
}
