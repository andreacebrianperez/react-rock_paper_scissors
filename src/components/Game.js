import React from "react";
import { Container, Row } from "react-bootstrap";
import rock from "../img/rock.png";
import paper from "../img/paper.png";
import scissors from "../img/scissors.png";
import "./Game.css";

export default function Game() {

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
            <div style={{visibility: "hidden"}}> a </div>
            <div className="p darkText textBoldXL"> P </div>
            <div className="l2 darkText textBoldXL"> L </div>
            <div className="a darkText textBoldXL"> A </div>
            <div className="y darkText textBoldXL"> Y </div>
            <div className="shadow"></div>
            <div className="shadow-two"></div>
          </div>

          <div className="lightBackground playerPart">
            <img src={rock} alt="" />
            <img src={paper} alt="" />
            <img src={scissors} alt="" />
          </div>
        </Row>
      </Container>
    </>
  )
}