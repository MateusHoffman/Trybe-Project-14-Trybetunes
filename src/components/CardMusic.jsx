import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CardMusic extends Component {
  render() {
    const { objMusic: {
      // artistId,
      artistName,
      artworkUrl100,
      collectionId,
      collectionName,
      // collectionPrice,
      // releaseDate,
      // trackCount,
    } } = this.props;
    return (
      <Link
        to={ `/album/${collectionId}` }
        data-testid={ `link-to-album-${collectionId}` }
        className="link-card-container"
      >
        <section className='card-container'>
          <img src={ artworkUrl100 } alt={ artistName } />
          <button><span>{collectionName}</span></button>
        </section>
      </Link>
    );
  }
}

CardMusic.propTypes = {
  objMusic: PropTypes.object,
}.isRequired;
