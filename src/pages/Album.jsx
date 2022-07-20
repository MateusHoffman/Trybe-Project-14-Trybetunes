import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import '../pages/Album.css';

export default class Album extends Component {
  state = {
    artistName: '',
    collectionName: '',
    collectionImage: '',
    arrTracks: [],
  }

  componentDidMount = () => {
    this.responseAPI();
  }

  responseAPI = async () => {
    const { match: { params: { id } } } = this.props;
    const resolve = await getMusics(id);
    this.setState(
      {
        artistName: resolve[0].artistName,
        collectionName: resolve[0].collectionName,
        collectionImage: resolve[0].artworkUrl100,
        arrTracks: resolve.filter(({ kind }) => kind === 'song'),
      },
    );
  }

  render() {
    const { artistName, collectionName, arrTracks, collectionImage } = this.state;
    return (
      <div data-testid="page-album">
        <section className="search-container-main">
          <section className="search-container">
            <Header />
          </section>
        </section>
        <section className='album-container-main'>
          <section className='album-container'>
            <div>
              <img src={collectionImage} alt={collectionName} />
              <div>
                <h3 data-testid="artist-name">{artistName}</h3>
                <h3 data-testid="album-name">{collectionName}</h3>
              </div>
            </div>
            <section className='track-container-main'>
              {
                arrTracks.map((music) => (
                  <MusicCard key={ music.trackId } music={ music } />
                  ))
                }
            </section>
          </section>
        </section>
      </div>
    );
  }
}

Album.propTypes = {
  id: PropTypes.string,
}.isRequired;
