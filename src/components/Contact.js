import React, { Component } from "react";
import emailjs from "emailjs-com";
import { Card, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach((val) => {
    val === "" && (valid = false);
  });

  return valid;
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      formErrors: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  }

  toastifySuccess() {
    toast.success("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
    });
  }

  toastifyFail() {
    toast.error("Form failed to send!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback fail",
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      const { name, email, subject, message } = this.state;

      let templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };

      emailjs.send(
        "service_18tbkfc",
        "template_6qu6m9g",
        templateParams,
        "user_UdAqWLJHIOWK1eFOYSmKZ"
      );

      console.log(`
        --SUBMITTING--
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `);

      this.toastifySuccess();
      this.resetForm();
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      this.toastifyFail();
    }
  };

  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "name":
        formErrors.name = value.length < 1 ? "Please enter your name." : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Please enter a valid email address.";
        break;
      case "subject":
        formErrors.subject = value.length < 1 ? "Please enter a subject." : "";
        break;
      case "message":
        formErrors.message = value.length < 1 ? "Please enter a message" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div id="contactMe">
        <Card>
          <Card.Header className="heading">Contact Me!</Card.Header>
          <Card.Body>
            <div className="ContactForm" style={{ display: "block" }}>
              <form id="contact-form" onSubmit={this.handleSubmit} noValidate>
                <div>
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={this.state.name}
                      className={`form-control formInput ${
                        formErrors.name.length > 0 ? "error" : null
                      }`}
                      onChange={this.handleChange}
                      placeholder="Name"
                      noValidate
                    ></input>
                    {formErrors.name.length > 0 && (
                      <span className="errorMessage">{formErrors.name}</span>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={this.state.email}
                      className={`form-control formInput ${
                        formErrors.email.length > 0 ? "error" : null
                      }`}
                      onChange={this.handleChange}
                      placeholder="Email"
                      noValidate
                    ></input>
                    {formErrors.email.length > 0 && (
                      <span className="errorMessage">{formErrors.email}</span>
                    )}
                  </div>
                </div>

                <div>
                  <div>
                    <input
                      type="subject"
                      name="subject"
                      value={this.state.subject}
                      className={`form-control formInput ${
                        formErrors.subject.length > 0 ? "error" : null
                      }`}
                      onChange={this.handleChange}
                      placeholder="Subject"
                      noValidate
                    ></input>
                    {formErrors.subject.length > 0 && (
                      <span className="errorMessage">{formErrors.subject}</span>
                    )}
                  </div>

                  <div>
                    <textarea
                      rows="5"
                      name="message"
                      value={this.state.message}
                      className={`form-control formInput ${
                        formErrors.message.length > 0 ? "error" : null
                      }`}
                      onChange={this.handleChange}
                      placeholder="Message"
                      noValidate
                    ></textarea>
                    {formErrors.message.length > 0 && (
                      <span className="errorMessage">{formErrors.message}</span>
                    )}
                  </div>
                </div>
                <div>
                  <Button type="submit">Submit</Button>
                </div>
              </form>
              <ToastContainer />
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ContactForm;
