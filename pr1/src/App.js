import React, { PureComponent } from 'react'
import News from './News/News';
import PersonalInfoClass from './PersonalInfo/PersonalInfoClass';
import PersonalInfoFunc from './PersonalInfo/PersonalInfoFunc';
import CityClass from './city/cityClass';
import CityFunc from './city/cityFunc';
import BookClass from './Book/bookClass';
import BookFunc from './Book/bookFunc';







class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return(
      <>
      <News />
      <br/>
      <br/>
      <PersonalInfoClass />
      <br/>
      <PersonalInfoFunc />
      <br/>
      <CityClass />
      <br/>
      <CityFunc />
      <br/>
      <BookClass />
      <br/>
      <BookFunc />
      </>
    )

  }
}

export default App