import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render(){
        return(
            <nav classname="main-nav">
                <ul>
                    <li><NavLink to='/cats' onClick={this.props.navSelection} id='Cats'>Cats</NavLink></li>

                    <li><NavLink to='/dogs' onClick={this.props.navSelection} id='Dogs'>Dogs</NavLink></li>

                    <li><NavLink to='/computer' onClick={this.props.navSelection} id='Computers'>Computers</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default withRouter(Nav);