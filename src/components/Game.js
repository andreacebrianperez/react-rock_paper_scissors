import React from "react";
import { Container, Row } from "react-bootstrap";
import rock from "../img/rock.png";
import paper from "../img/paper.png";
import scissors from "../img/scissors.png";
import rockHand from "../img/rockHand.png";
import paperHand from "../img/paperHand.png";
import scissorsHand from "../img/scissorsHand.png";
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
            <div style={{ visibility: "hidden" }}> a </div>
            <div className="p darkText textBoldXL"> P </div>
            <div className="l2 darkText textBoldXL"> L </div>
            <div className="a darkText textBoldXL"> A </div>
            <div className="y darkText textBoldXL"> Y </div>
            <div className="shadow"></div>
            <div className="shadow-two"></div>
          </div>

          <div className="mediumBackground">
            <div>
              <h4 className="noDisplay chosenOptionEmoji"></h4>
              <h3 className="lightText textMediumL">
                Computer
              </h3>
              <h2 id="computerScore lightText textMediumL">0</h2>
            </div>

            <span className="lightText textMediumL"> X </span>

            <div>
              <h4 className="noDisplay chosenOptionEmoji"></h4>
              <h3 className="lightText textMediumL">
                Player
              </h3>
              <h2 id="playerScore lightText TextMediumL">0</h2>
            </div>

            <div>
              <div className="gameButton rock">
                <img src={rockHand} alt="" />
              </div>

              <div className="gameButton paper">
                <img src={paperHand} alt="" />
              </div>

              <div className="gameButton scissors">
                <img src={scissorsHand} alt="" />
              </div>
            </div>
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