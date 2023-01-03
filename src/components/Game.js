import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./Game.css";

import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

const actions = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

function randomAction() {
  const keys = Object.keys(actions);
  const index = Math.floor(Math.random() * keys.length);

  return keys[index];
}

function calculateWinner(action1, action2) {
  if (action1 === action2) {
    return 0;
  } else if (actions[action1].includes(action2)) {
    return -1;
  } else if (actions[action2].includes(action1)) {
    return 1;
  }

  return null;
}

function ActionIcon({ action, ...props }) {
  const icons = {
    rock: FaHandRock,
    paper: FaHandPaper,
    scissors: FaHandScissors
  };
  const Icon = icons[action];
  return <Icon {...props} />;
}

function Player({ name = "Player", score = 0, action = "rock" }) {
  return (
    <div>
      <div className="score lightText textMediumM">{`${name}: ${score}`}</div>
      <div className="action lightText textMediumM">
        {action && <ActionIcon action={action} size={40} />}
      </div>
    </div>
  );
}

function ActionButton({ action = "rock", onActionSelected }) {
  return (
    <button className="round-btn" onClick={() => onActionSelected(action)}>
      <ActionIcon action={action} size={20} />
    </button>
  );
}

function ShowWinner({ winner = 0 }) {
  const text = {
    "-1": "¡Ganaste!",
    0: "Empate",
    1: "¡Perdiste!",
  };

  return (
    <h2 className="winnerText textMediumL">{text[winner]}</h2>
  )
}

function Game() {
  const [playerAction, setPlayerAction] = useState("");
  const [computerAction, setComputerAction] = useState("");

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [winner, setWinner] = useState(0);

  const onActionSelected = (selectedAction) => {
    const newComputerAction = randomAction();

    setPlayerAction(selectedAction);
    setComputerAction(newComputerAction);

    const newWinner = calculateWinner(selectedAction, newComputerAction);
    setWinner(newWinner);
    if (newWinner === -1) {
      setPlayerScore(playerScore + 1);
    } else if (newWinner === 1) {
      setComputerScore(computerScore + 1);
    }
  };

  return (
    <>
      <Container>
        <Row className="gamePartsDistribution">
          <div className="darkBackground computerPart bouncing-text">
            <div className="l darkText textBoldXL"> L </div>
            <div className="e darkText textBoldXL"> E </div>
            <div className="t darkText textBoldXL"> T </div>
            <div className="apostrophe darkText textBoldXL"> ' </div>
            <div className="s darkText textBoldXL"> S </div>
            <div style={{ visibility: "hidden" }}> a </div>
            <div className="p darkText textBoldXL"> P </div>
            <div className="l2 darkText textBoldXL"> L </div>
            <div className="a darkText textBoldXL"> A </div>
            <div className="y darkText textBoldXL"> Y </div>
          </div>

          <div className="lightBackground playerPart">
            <div className="container player">
              <Player
                name="Jugador"
                score={playerScore}
                action={playerAction}
              />
              <Player
                name="Ordenador"
                score={computerScore}
                action={computerAction}
              />
            </div>
            <div>
              <ActionButton action="rock" onActionSelected={onActionSelected} />
              <ActionButton action="paper" onActionSelected={onActionSelected} />
              <ActionButton action="scissors" onActionSelected={onActionSelected} />
            </div>
            <ShowWinner winner={winner} />
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Game;