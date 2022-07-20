import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';

export default class MusicCard extends Component {
  state = {
    clickCheck: false,
    itsLoading: false,
    removeFavorite: false,
  }

  componentDidMount = () => {
    this.getFavoriteSongs();
  }

  addSong = async () => {
    const { music } = this.props;
    this.setState({ itsLoading: true });
    await addSong(music);
    this.setState({ itsLoading: false });
  }

  removeSong = async () => {
    const { music } = this.props;
    this.setState({ itsLoading: true });
    await removeSong(music);
    this.setState({ itsLoading: false });
  }

  getFavoriteSongs = async () => {
    const { music } = this.props;
    const response = await getFavoriteSongs(music);
    if (response.some((e) => e.trackId === music.trackId)) {
      this.setState({ clickCheck: true });
    } else {
      this.setState({ clickCheck: false });
    }
  }

  handleChange = () => {
    const { forceUpdate } = this.props;
    const { clickCheck } = this.state;
    if (forceUpdate === 'forceUpdate') {
      this.removeSong();
      this.setState({ removeFavorite: true });
    } else if (clickCheck === true) {
      this.setState({ clickCheck: false });
      this.removeSong();
    } else {
      this.setState({ clickCheck: true });
      this.addSong();
    }
  }

  render() {
    const { music } = this.props;
    const { clickCheck, itsLoading, removeFavorite } = this.state;
    return (
      <>
        {itsLoading ? null : null}
        {
          removeFavorite
            ? null
            : (
              <section className="track-container">
                {/* <div> */}
                  <p>{ music.trackName }</p>
                  {/* {itsLoading ? <Loading /> : null} */}
                  <audio data-testid="audio-component" src={ music.previewUrl } controls>
                    <track kind="captions" />
                  </audio>
                {/* </div> */}
                <label htmlFor="favorites" className='label-favorite'>
                  Favorite: 
                  <input
                    type="checkbox"
                    name="favorites"
                    id="favorites"
                    data-testid={ `checkbox-music-${music.trackId}` }
                    onChange={ this.handleChange }
                    checked={ clickCheck }
                  />
                </label>
              </section>
            )
        }
        {/* <div>
          <p>{ music.trackName }</p>
          <audio data-testid="audio-component" src={ music.previewUrl } controls>
            <track kind="captions" />
          </audio>
        </div>
        <label htmlFor="favorites">
          <input
            type="checkbox"
            name="favorites"
            value="Favorita"
            data-testid={ `checkbox-music-${music.trackId}` }
            onChange={ this.handleChange }
            checked={ clickCheck }
          />
        </label> */}
      </>
    );
  }
}

MusicCard.propTypes = {
  music: PropTypes.object,
}.isRequired;
