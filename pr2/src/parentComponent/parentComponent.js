import React, { PureComponent } from 'react'
import ChildComponent from '../childComponent/childComponent';

class ParentComponent extends PureComponent {


  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    const routes = [
      { currency: 'USD', grn: 39.02 },
      { currency: 'EUR', grn: 42.36 },
      { currency: 'EGP', grn: 0.82 },
      { currency: 'JPY', grn: 2.57 }
    ];

    return (
      <div >
        <h1>Список валют</h1>
        <ChildComponent routes={routes} />
      </div >
    );
  }
}

export default ParentComponent