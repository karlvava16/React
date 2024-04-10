import React, { PureComponent } from 'react'
import './headerNavStyle.css';

class Nav extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <header>
                <nav>
                    <a href="/">News</a>
                    <a href="/PersonalInfoClass">PersonalInfoClass</a>
                    <a href="/PersonalInfoFunc">PersonalInfoFunc</a>
                    <a href="/CityClass">CityClass</a>
                    <a href="/CityFunc">CityFunc</a>
                    <a href="/BookClass">BookClass</a>
                    <a href="/BookFunc">BookFunc</a>
                </nav>
            </header>
        )
    }
}

export default Nav