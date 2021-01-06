import React from "react";
import { Card } from "react-bootstrap";
import address from "../imageAddress";
class ImageCard extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "20%",
        }}
      >
        <Card>
          <Card.Img
            src={address}
            alt="Profile Pic"
            style={{ height: "30%" }}
          ></Card.Img>
        </Card>
      </div>
    );
  }
}
export default ImageCard;
