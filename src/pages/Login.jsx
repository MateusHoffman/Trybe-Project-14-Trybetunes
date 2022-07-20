import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Loading from '../components/Loading';
import FormLogin from '../components/FormLogin';
import { createUser } from '../services/userAPI';
import '../css/pages/Login.css';

const MINIMUM_OF_CHARACTERS = 3;
export default class Login extends Component {
  state = {
    loginDisabled: true,
    userName: '',
    userEmail: '',
    itsLoading: false,
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    const {
      userName,
      userEmail,
    } = this.state;
    if (value.length >= MINIMUM_OF_CHARACTERS
        && userName.length
        && userEmail.length) {
      this.setState({ loginDisabled: false });
    } else {
      this.setState({ loginDisabled: true });
    }
  }

  hoverBtnSubmit = () => {
    console.log('1');
    const {
      userName,
      userEmail,
    } = this.state;
    if (userName.length
        && userEmail.length) {
      this.setState({ loginDisabled: false });
      console.log('2');
    } else {
      this.setState({ loginDisabled: true });
      console.log('3');
    }
    console.log('4');
  }

  changeRoute = () => {
    const { history } = this.props;
    history.push('/search');
  }

  submitDataUser = (event) => {
    const { userName, userEmail } = this.state;
    event.preventDefault();
    createUser({
      name: userName,
      email: userEmail,
    }).then(
      () => {
        this.changeRoute();
      },
    );
    this.setState({ itsLoading: true });
  }

  render() {
    const { loginDisabled, itsLoading } = this.state;
    return (
      <div data-testid="page-login">
        {
          itsLoading
            // ? <Loading />
            ? (
              <section className="only-loading">
                <div className="loading">
                  <span>|</span>
                  <span>|</span>
                  <span>|</span>
                  <span>|</span>
                  <span>|</span>
                  <span>|</span>
                  <span>|</span>
                  <span>|</span>
                  <span>|</span>
                  <span>|</span>
                </div>
              </section>)
            : (
              <FormLogin
                loginDisabled={ loginDisabled }
                submitDataUser={ this.submitDataUser }
                handleChange={ this.handleChange }
                hoverBtnSubmit={ this.hoverBtnSubmit }
              />
            )
        }
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.string,
}.isRequired;
