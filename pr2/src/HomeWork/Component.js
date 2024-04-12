import React, { PureComponent } from "react";
import FirstValue from "./FirstValue/FirstValue";
import SecondValue from "./SecondValue/SecondValue";
import './compStyle.css';

class Component extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      content: null // Initialize content as null
    };
  }

  // Define Switch as a class method
  Switch = () => {
    // Use setState to update state variables
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn,
      content: prevState.isLoggedIn ? <FirstValue /> : <SecondValue />
    }));
  }

  render() {
    // Retrieve state variables from this.state
    const { content, isLoggedIn } = this.state;

    return (
      <>
        <button onClick={this.Switch}>Switch</button>
        <div className="comp">{content}</div>
        {/* Use ternary operator to conditionally render content */}
        <div className="comp">{isLoggedIn ? <FirstValue /> : <SecondValue />}</div>
        {/* Use logical && operator for conditional rendering */}
        <div className="comp">{isLoggedIn && <FirstValue />}</div>
      </>
    );
  }
}

export default Component;
