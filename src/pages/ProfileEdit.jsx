import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser, updateUser } from '../services/userAPI';

export default class ProfileEdit extends Component {
  state = {
    itsLoading: false,
    image: '',
    name: '',
    email: '',
    description: '',
    editDisabled: true,
  }

  componentDidMount = () => {
    this.getUser();
  }

  getUser = async () => {
    this.setState({ itsLoading: true });
    const response = await getUser();
    this.setState({
      itsLoading: false,
      image: response.image,
      name: response.name,
      email: response.email,
      description: response.description,
    });
  }

  // redirect = () => {
  //   const { history } = this.props;
  //   history.push({
  //     pathname: '/profile',
  //   });
  // }

  updateUser = async (event) => {
    event.preventDefault();
    const { history } = this.props;
    const {
      name,
      email,
      image,
      description,
    } = this.state;
    const editUser = {
      name,
      email,
      image,
      description,
    };
    await updateUser(editUser);
    history.push('/profile');
  }

  handleChange = ({ target: { id, value } }) => {
    this.setState({ [id]: value });
    const {
      name,
      email,
      image,
      description,
    } = this.state;
    if (name.length > 0
        && email.length > 0
        && image.length > 0
        && description.length > 0
    ) {
      this.setState({ editDisabled: false });
    } else {
      this.setState({ editDisabled: true });
    }
  }

  render() {
    const {
      itsLoading,
      name,
      email,
      image,
      description,
      editDisabled,
    } = this.state;
    return (
      <div data-testid="page-profile-edit">
        <Header />
        {itsLoading ? <Loading /> : null}
        <h1>ProfileEdit</h1>
        <section>
          <form>
            <label htmlFor="image">
              <p>Image</p>
              <input
                type="text"
                name="image"
                id="image"
                data-testid="edit-input-image"
                required
                value={ image }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="name">
              <p>Name</p>
              <input
                type="text"
                name="name"
                id="name"
                data-testid="edit-input-name"
                required
                value={ name }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="email">
              <p>Email</p>
              <input
                type="email"
                name="email"
                id="email"
                data-testid="edit-input-email"
                required
                onChange={ this.handleChange }
                value={ email }
              />
            </label>
            <label htmlFor="description">
              <p>Description</p>
              <input
                type="text"
                name="description"
                id="description"
                data-testid="edit-input-description"
                required
                onChange={ this.handleChange }
                value={ description }
              />
            </label>
            <button
              type="submit"
              data-testid="edit-button-save"
              disabled={ editDisabled }
              onClick={ this.updateUser }
            >
              Editar perfil
            </button>
          </form>
        </section>
      </div>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.object,
}.isRequired;
