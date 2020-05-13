export default function playMove(state, e) {
  let { board, turn, xSuperOn, oSuperOn } = state;
  let copy = board.slice();

  if ((!xSuperOn || !oSuperOn) && !copy[e.target.value]) {
    console.log("heck!");
    copy[e.target.value] = turn;
    return {
      board: copy,
      turn: turn === "X" ? "O" : "X",
    };
  }
  if (xSuperOn && turn == "X" && board[e.target.value] !== "X") {
    copy[e.target.value] = turn;
    return {
      board: copy,
      turn: "O",
      xSuperOn: false,
    };
  }
  if (oSuperOn && turn == "O" && board[e.target.value] !== "O") {
    console.log("drat");
    copy[e.target.value] = turn;
    return {
      board: copy,
      turn: "X",
      oSuperOn: false,
    };
  }
}
