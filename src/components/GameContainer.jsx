import React, { useState } from "react";
import PlayersName from "./PlayersName";
import GameBoard from "./GameBoard";

function GameContainer() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [isEditing1, setIsEditing1] = useState(false);
  const [isEditing2, setIsEditing2] = useState(false);
  return (
    <div id="game-container">
      <div id="players">
        <PlayersName
          input={input1}
          isEditing={isEditing1}
          setInput={setInput1}
          symbol="X"
          setIsEditing={setIsEditing1}
          placeholder="Player 1"
        />

        <PlayersName
          input={input2}
          isEditing={isEditing2}
          setInput={setInput2}
          symbol="O"
          setIsEditing={setIsEditing2}
          placeholder="player 2"
        />
      </div>
      <GameBoard />
    </div>
  );
}

export default GameContainer;
