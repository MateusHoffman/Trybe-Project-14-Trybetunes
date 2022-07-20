import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';
import { getUser } from '../services/userAPI';
import logo from '../img/logo.png';

export default class Header extends Component {
  state = {
    itsLoading: false,
    userName: '',
  }

  retrieveName = async () => {
    this.setState({ itsLoading: true });
    const objDataUser = await getUser();
    this.setState({ itsLoading: false });
    this.setState({ userName: objDataUser.name });
  }

  componentDidMount = () => {
    this.retrieveName();
  }

  render() {
    const { userName } = this.state;
    return (
      <header data-testid="header-component" className="header-container">
        {
          false
            ? null
            : (
              <header className='section-header'>
                <div className="logo-div">
                  <Link to="/search"><img src={logo} alt="Logo" /></Link>
                </div>
                <div className="userName-div">
                  <p data-testid="header-user-name">{userName}</p>
                </div>
                <div className="header-nav-links">
                  <button type='button'><Link to="/search" data-testid="link-to-search">Search</Link></button>
                  <button type='button'><Link to="/favorites" data-testid="link-to-favorites">Favorites</Link></button>
                  <button type='button'><Link to="/profile" data-testid="link-to-profile">Profile</Link></button>
                  <button type='button'><a href="https://www.linkedin.com/in/mateushoffman/" target="_blank" rel="noreferrer">LinkedIn</a></button>
                  <button type='button'><a href="https://github.com/MateusHoffman" target="_blank" rel="noreferrer">GitHub</a></button>
                </div>
              </header>
            )
        }
      </header>
    );
  }
}
