import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locality: {
        postcode: "2000",
        suburb: "HAYMARKET",
        state: "NSW"
      },
      result: {
        success: "",
        message: ""
      }
    };

    this.handleChangePostcode = this.handleChangePostcode.bind(this);
    this.handleChangeSuburb = this.handleChangeSuburb.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.HandleMessage = this.HandleMessage.bind(this);
  }

  handleChangePostcode(event) {
    this.setState({
      ...this.state,
      locality: { ...this.state.locality, postcode: event.target.value }
    });
  }
  handleChangeSuburb(event) {
    this.setState({
      ...this.state,
      locality: {
        ...this.state.locality,
        suburb: event.target.value.toUpperCase()
      }
    });
  }

  handleChangeState(event) {
    this.setState({
      ...this.state,
      locality: {
        ...this.state.locality,
        state: event.target.value.toUpperCase()
      }
    });
  }

  handleSubmit(event) {
    fetch(
      `http://localhost:3000/?postcode=${this.state.locality.postcode}&suburb=${this.state.locality.suburb}&state=${this.state.locality.state}`
    )
      .then(response => response.json())
      .catch(err => {
        console.log(err);
      })
      .then(result => {
        this.setState({
          ...this.state,
          result: {
            success: result.success,
            message: result.message
          }
        });
      });
    event.preventDefault();
  }

  HandleMessage() {
    const success = {
      color: "green"
    };
    const fail = {
      color: "#ff0a1b"
    };

    if (this.state.result.success) {
      return <p style={success}>{this.state.result.message}</p>;
    }
    return <p style={fail}>{this.state.result.message}</p>;
  }

  render() {
    return (
      <>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <label className="label-text">
            Postcode:
            <input
              className="form-field"
              type="number"
              value={this.state.locality.postcode}
              onChange={this.handleChangePostcode}
            />
          </label>
          <label className="label-text">
            Suburb:
            <input
              className="form-field"
              type="text"
              value={this.state.locality.suburb}
              onChange={this.handleChangeSuburb}
            />
          </label>
          <label className="label-text">
            State:
            <input
              className="form-field"
              type="text"
              value={this.state.locality.state}
              onChange={this.handleChangeState}
            />
          </label>
          <input className="submit-button" type="submit" value="Submit" />
          <div className="msg-container">
            <this.HandleMessage />
          </div>
        </form>
      </>
    );
  }
}

const root = document.querySelector("#root");
ReactDOM.render(<Form />, root);
