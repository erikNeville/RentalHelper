import React, { Component } from 'react'
import M from 'materialize-css'

class Navbar extends Component {
    
    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo">RenterHelper</a>
                        <a href="#" data-target="navmenu" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="/">Home</a></li>
                            <li><a href="/create">New Rental</a></li>
                            <li><a href="#">Contacts</a></li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="navmenu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/create">New Rental</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
            </div>
        )
    }
    
}

export default Navbar