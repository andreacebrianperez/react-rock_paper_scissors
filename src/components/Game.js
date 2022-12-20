import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Game.css";

export default function Game() {

  return (
    <>
      <Container>
        <Row className="gamePartsDistribution">
          <div className="darkBackground computerPart">
            <h1 className="darkText textBoldXL">
              LET'S PLAY!
            </h1>
          </div>

          <div className="lightBackground playerPart">
            <h1 className="lightText textBoldXL">LET'S PLAY</h1>

            <img src="" alt=""></img>
          </div>
        </Row>
      </Container>
    </>
  )
}