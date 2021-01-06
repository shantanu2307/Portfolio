import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import "./GPCSS.css";
import nodemailer from "nodemailer";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  formSubmit = async (e) => {
    console.log(this.state);
    //SMTP setup
  };

  render() {
    return (
      <div id="contactMe">
        <Card>
          <Card.Header>
            <h1 className="heading">Contact Me!</h1>
            <blockquote className="heading2">Lets Get in Touch!</blockquote>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="label">Email address</Form.Label>
                <Form.Control
                  value={this.state.email}
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    this.setState({
                      email: e.target.value,
                    });
                  }}
                />
              </Form.Group>
              <Form.Group controlId="formBasicName">
                <Form.Label className="label">Name</Form.Label>
                <Form.Control
                  value={this.state.name}
                  type="text"
                  placeholder="Enter Name"
                  onChange={(e) => {
                    this.setState({
                      name: e.target.value,
                    });
                  }}
                />
              </Form.Group>
              <Form.Group controlId="formBasicText">
                <Form.Label className="label">Message</Form.Label>
                <Form.Control
                  value={this.state.message}
                  type="text"
                  placeholder="Enter Message"
                  style={{ height: "12vw" }}
                  onChange={(e) => {
                    this.setState({
                      message: e.target.value,
                    });
                  }}
                />
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" type="submit" onClick={this.formSubmit}>
              Submit
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
export default Contact;
