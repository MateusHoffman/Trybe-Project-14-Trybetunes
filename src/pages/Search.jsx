import React, { Component } from 'react';
import CardMusic from '../components/CardMusic';
import Header from '../components/Header';
// import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import "./Search.css"
import lupa from "../img/lupa.png"
import dataInitial from "../dataInitial"

export default class Search extends Component {
  state = {
    searchDisabled: true,
    inputSearch: '',
    itsLoading: false,
    clickSearch: false,
    arrMusics: [],
  }



  handleChange = (event) => {
    const { target: { value } } = event;
    this.setState({ inputSearch: value });
    if (value.length >= 2) {
      this.setState({ searchDisabled: false });
    } else {
      this.setState({ searchDisabled: true });
    }
  }

  handleClickSearch = async () => {
    // event.preventDefault();
    const { inputSearch } = this.state;
    const itemSearch = inputSearch;
    this.setState({
      itsLoading: true,
      inputSearch: '',
      itemSearch,
    });
    const response = await searchAlbumsAPI(itemSearch);
    console.log(response);
    this.setState({ arrMusics: response, itsLoading: false, clickSearch: true });
  }

  render() {
    const {
      searchDisabled,
      itsLoading,
      clickSearch,
      itemSearch,
      inputSearch,
      arrMusics,
    } = this.state;

    const FormSearch = (
      <form className='form-search'>
        <label htmlFor="search" className='text-search'>
          <input
            name="search"
            type="text"
            data-testid="search-artist-input"
            placeholder='Search artist name...'
            value={ inputSearch }
            onChange={ this.handleChange }
          />
        </label>
        <button
          className='btn-search-artist'
          data-testid="search-artist-button"
          type="submit"
          disabled={ searchDisabled }
          onClick={ this.handleClickSearch }
        >
          <img src={lupa} alt="Lupa" />
        </button>
      </form>
    );
    return (
      <>
        <section className="search-container-main">
          <section className="search-container">
            <Header className="search-header" />
            <div data-testid="page-search" className="search-div">
              {/* <h1>Search</h1> */}
              {itsLoading ? null : FormSearch}
              {/* <AlbumList emptyResult={ emptySearch } searchResolve={ searchResult } /> */}
            </div>
          </section>
        </section>
        <section className='section-search-main'>
          <section className='section-search'>
            {
              clickSearch && itemSearch.length > 0
                ? (
                  <p className='result-search'>
                    Artist albums:
                    {' '}
                    {itemSearch}
                  </p>
                )
                : null
            }
            <section className='all-cards'>
              {
                arrMusics.length === 0
                ? dataInitial.map((e) => <CardMusic key={ e.collectionId } objMusic={ e } />)
                : arrMusics.map((e) => <CardMusic key={ e.collectionId } objMusic={ e } />)
              }
            </section>
          </section>
        </section>
      </>
    );
  }
}
