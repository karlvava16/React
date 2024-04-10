import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from './News/News';
import PersonalInfoClass from './PersonalInfo/PersonalInfoClass';
import PersonalInfoFunc from './PersonalInfo/PersonalInfoFunc';
import CityClass from './city/cityClass';
import CityFunc from './city/cityFunc';
import BookClass from './Book/bookClass';
import BookFunc from './Book/bookFunc';
import Nav from './Nav/Nav';








class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return(
     <> <Nav/>

     <Router>
     <Routes>
         <Route path="/" element={<News />}/>
         <Route  path="PersonalInfoClass" element={<PersonalInfoClass />} />
         <Route path="PersonalInfoFunc" element={<PersonalInfoFunc />} />
         <Route path="CityClass" element={<CityClass />} />
         <Route path="CityFunc" element={ <CityFunc />} />
         <Route path="BookClass" element={ <BookClass />} />
         <Route path="BookFunc" element={ <BookFunc />} />
         
     </Routes>
   </Router></>
    )

  }
}

export default App