import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/components/FormLogin.css';

export default class FormLogin extends Component {
  render() {
    const { loginDisabled, submitDataUser, handleChange, hoverBtnSubmit } = this.props;
    return (
      <section className="section-login">
        <form className="form-login"
          onMouseMove={ hoverBtnSubmit }
        >
          <h1>LOGIN</h1>
          {/* <label htmlFor="login-name"> */}
          <input
            className="login-input-name"
            type="text"
            name="userName"
            data-testid="login-name-input"
            placeholder="Digite seu nome..."
            onChange={ handleChange }
            onMouseMove={ handleChange }
          />
          <input
            className="login-input-name"
            type="email"
            name="userEmail"
            placeholder="Digite seu email..."
            onChange={ handleChange }
            onMouseMove={ handleChange }
          />
          <button
            type="submit"
            data-testid="login-submit-button"
            disabled={ loginDisabled }
            onClick={ submitDataUser }
            className="btn-login"
          >
            Entrar
          </button>
        </form>
      </section>
    );
  }
}

FormLogin.propTypes = {
  loginDisabled: PropTypes.bool,
  submitDataUser: PropTypes.func,
  handleChange: PropTypes.func,
}.isRequired;
