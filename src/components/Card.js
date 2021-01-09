import React from "react";
import { Card } from "react-bootstrap";
import address from "../imageAddress";
import { TimelineLite, Power2, TimelineMax } from "gsap";
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
    this.divRef = React.createRef();
    this.tl = new TimelineLite();
  }
  componentDidMount() {
    this.tl
      .from(this.divRef, 0, {
        css: { visibility: 0 },
      })
      .from(this.imgRef, 1, {
        css: { opacity: "0", width: "10%" },
        animation: Power2.easeInOut,
      });
  }

  render() {
    return (
      <div
        ref={(e) => {
          this.divRef = e;
        }}
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "20%",
        }}
      >
        <Card
          ref={(e) => {
            this.imgRef = e;
          }}
        >
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
