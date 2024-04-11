import React, { PureComponent } from 'react'

class ChildComponent extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    const { routes } = this.props;

    return (
      <div>
        <h2>Валюти:</h2>
        <ul>
          {routes.map(route => (
            <li key={route.currency}>
              <p>{route.currency} : {route.grn}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ChildComponent