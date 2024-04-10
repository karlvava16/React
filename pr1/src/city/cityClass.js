import React, { PureComponent } from 'react'
import './cityStyle.css';


class CityClass extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='city'>
            <h2>Город: Одесса</h2>
            <h2>Страна: Украина</h2>
            <h2>Год основания: 1794</h2>
            <div className="Images">
            <img src="./img/1.jpg" alt="odessa" />
            <img src="./img/2.jpg" alt="odessa" />
            <img src="./img/3.jpg" alt="odessa" />
            </div>

            </div>
            
        )
    }
}

export default CityClass