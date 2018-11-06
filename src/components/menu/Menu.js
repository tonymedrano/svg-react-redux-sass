import React, { Component } from 'react'
import './Menu.scss'

class Menu extends Component {
    componentDidMount() {
        this.toggleMenu(this)
    }

    toggleMenu() {
        const menu = document.querySelector('.mobile-button a')
        menu.addEventListener('click', ((e) => {
            menu.parentNode.parentNode.classList.toggle('open')
            menu.textContent = menu.textContent == 'Close Menu' ? 'Menu' : 'Close Menu'
            e.preventDefault()
        }))
    }

    render() {
        return (
            <nav className="main-nav">
                <div className="container">
                    <ul>
                        <li className="mobile-button"><a href="#">Menu</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Methods</a></li>
                        <li><a href="#">Results</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Menu
