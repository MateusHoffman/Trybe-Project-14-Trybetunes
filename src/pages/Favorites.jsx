import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

export default class Favorites extends Component {
  state = {
    itsLoading: false,
    favoriteSongs: [],
  };

  componentDidMount = () => {
    this.getFavoriteSongs();
  }

  // componentDidUpdate = () => {
  //   this.getFavoriteSongs();
  // }

  // removeSong = async () => {
  //   const { music } = this.props;
  //   this.setState({ itsLoading: true });
  //   await removeSong(music);
  //   this.setState({ itsLoading: false });
  // }

  getFavoriteSongs = async () => {
    this.setState({ itsLoading: true });
    const response = await getFavoriteSongs();
    this.setState({ itsLoading: false });
    this.setState({ favoriteSongs: response });
  };

  render() {
    const { itsLoading, favoriteSongs } = this.state;
    // console.log(favoriteSongs);
    return (
      <div data-testid="page-favorites">
        <Header />
        <p>Favorites</p>
        {itsLoading ? <Loading /> : null}
        {
          favoriteSongs
            .map((music) => (
              <MusicCard
                key={ music.trackId }
                music={ music }
                forceUpdate="forceUpdate"
                favoriteSongs={ favoriteSongs }
              />
            ))
        }
      </div>
    );
  }
}
