import React, { PureComponent } from 'react'
import './personStyle.css';


class PersonalInfoClass extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="personal">
            <h2>ФИО: Карлинский Владислав Юрьевич</h2>
            <h2>телефон : +380962403370</h2>
            <h2>почта : vladyslav.karlinskyi@gmail.com</h2>
            </div>
        )
    }
}

export default PersonalInfoClass