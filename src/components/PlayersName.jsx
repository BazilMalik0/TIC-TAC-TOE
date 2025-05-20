import React from "react";

function PlayersName({
  input,
  isEditing,
  setInput,
  symbol,
  setIsEditing,
  placeholder,
}) {
  return (
    <div>
      <div className="player">
        <input
          type="text"
          value={input}
          disabled={isEditing}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder={placeholder}
        />
        <span className="player-symbol">{symbol}</span>

        <button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Edit" : "save"}
        </button>
      </div>
    </div>
  );
}

export default PlayersName;
