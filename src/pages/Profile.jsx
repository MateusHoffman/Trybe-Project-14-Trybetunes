import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';

export default class Profile extends Component {
  state = {
    itsLoading: false,
    userName: '',
    email: '',
    description: '',
    image: '',
  }

  componentDidMount = () => {
    this.getUser();
  }

  getUser = async () => {
    this.setState({ itsLoading: true });
    const response = await getUser();
    // console.log(response);
    this.setState({ itsLoading: false });
    this.setState({
      userName: response.name,
      email: response.email,
      description: response.description,
      image: response.image,
    });
  }

  render() {
    const { itsLoading, userName, email, description, image } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        {itsLoading ? <Loading /> : null }
        <p>Profile</p>
        <img data-testid="profile-image" src={ image } alt={ image } />
        <Link to="/profile/edit">
          <button type="button">Editar perfil</button>
        </Link>
        <p>
          Nome:
          {' '}
          <span>{userName}</span>
        </p>
        <p>
          Email:
          {' '}
          <span>{email}</span>
        </p>
        <p>
          Description:
          {' '}
          <span>{description}</span>
        </p>
      </div>
    );
  }
}
