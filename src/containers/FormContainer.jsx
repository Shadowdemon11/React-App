import React, { Component } from "react";

/* Import Components */
import CheckBox from "../components/CheckBox";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Select from "../components/Select";
import Button from "../components/Button";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: "",
        NPInumber: "",
        BusinessAddress: "",
        TelephoneNumber: "",
        Emailaddress: ""
      },

      //genderOptions: ["Male", "Female", "Others"],
      //skillOptions: ["Programming", "Development", "Design", "Testing"]
    };
    
    
    this.handleFullName = this.handleFullName.bind(this);
    this.handleNPInumber = this.handleNPInumber.bind(this);
    this.handleBusinessAddress = this.handleBusinessAddress.bind(this);
    this.handleTelephoneNumber = this.handleTelephoneNumber.bind(this);
    this.handleEmailaddress = this.handleEmailaddress.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleFullName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleNPInumber(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          NPInumber: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleBusinessAddress(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          BusinessAddress: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleTelephoneNumber(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          TelephoneNumber: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleEmailaddress(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          Emailaddress: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  

 /*  handleCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newUser.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.skills.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newUser.skills, newSelection];
    }

    this.setState(prevState => ({
      newUser: { ...prevState.newUser, skills: newSelectionArray }
    }));
  } */

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch("http://example.com", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        name: "",
        NPInumber: "",
        BusinessAddress: "",
        TelephoneNumber: "",
        Emailaddress: ""
      }
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          inputType={"text"}
          title={"Full Name"}
          name={"name"}
          value={this.state.newUser.name}
          placeholder={"Enter your name"}
          handleChange={this.handleInput}
        />{" "}
        {/* Name of the user */}
        <Input
          inputType={"number"}
          name={"NPI number"}
          title={"NPI number"}
          value={this.state.newUser.NPInumber}
          placeholder={"Enter your NPI number"}
          handleChange={this.handleNPInumber}
        />{" "}
        {/* NPI number */}
        <Input
          inputType={"text"}
          title={"Business Address"}
          name={"Business Address"}
          value={this.state.newUser.BusinessAddress}
          placeholder={"Enter your business address"}
          handleChange={this.handleBusinessAddress}
        />{" "}
        {/* Business Address */}
        <Input
          inputType={"text"}
          title={"Telephone Number"}
          name={"Telephone Number"}
          value={this.state.newUser.TelephoneNumber}
          placeholder={"Enter your Telephone Number"}
          handleChange={this.handleTelephoneNumber}
        />{" "}
        {/* Telephone Number */}
        <Input
          inputType={"text"}
          title={"Email address"}
          name={"Email address"}
          value={this.state.newUser.Emailaddress}
          placeholder={"Enter your email address"}
          handleChange={this.handleEmailaddress}
        />{" "}
        {/* Business Address */}
        
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
        {/* Clear the form */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
