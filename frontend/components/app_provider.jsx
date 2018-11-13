import React from 'react';

import * as SongApiUtil from '../utils/song_api_util';
import * as ArtistApiUtil from '../utils/artist_api_util';
import * as AlbumApiUtil from '../utils/album_api_util';

const AppContext = React.createContext();

class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrackId: 0,
      currentTrackName: '',
      currentTrackArtist: '',
      currentTrackCoverUrl: '',
      currentTrackUrl: '',
      isPlaying: false,
      queue: [],
      queueIndex: 0,
      dispatch: this.dispatch,
    }
  }

  dispatch = (action_type, songIds = [], queueIndex = 0) => {
    if (action_type === 'START') {
      this.addToQueue(songIds, true, queueIndex);
    }

    if (action_type === 'RESUME') {
      this.resumeAudio();
    }

    if (action_type == 'PAUSE') {
      this.pauseAudio();
    }

    if (action_type == 'STOP') {
      this.stopAudio();
    }

    if (action_type == 'NEXT') {
      this.nextAudio();
    }

    if (action_type == 'PREV') {
      this.prevAudio();
    }
  }

  addToQueue = (songIds, start = false, index = 0) => {
    if (start === true) {
      this.startAudio(songIds, index);
      this.setState({
        queue: songIds
      });
    } else {
      let { queue } = this.state;
      newQueue = queue.concat(songIds);
      this.setState({
        queue: newQueue
      });
    }
  }

  startAudio = (queue, index) => {
    SongApiUtil.fetchSong(queue[index]).then(
      (data) => {
        ArtistApiUtil.fetchArtist(data.artist_id).then(
          (artist) => {
            this.setState({
              currentTrackArtist: artist.name
            })
          }
        )
        AlbumApiUtil.fetchAlbum(data.album_id).then(
          (album) => {
            this.setState({
              currentTrackCoverUrl: album.thumb
            })
          }
        )

        this.setState({
          currentTrackName: data.name,
          currentTrackUrl: data.file,
          queueIndex: index
        })

        let player = document.getElementById('player');

        player.ontimeupdate = () => {
          let percent = (player.currentTime / player.duration) * 100;
          let progressbar =
            document.querySelector('#song-progress .noUi-origin');
          progressbar.style = 'left: ' + percent + '%;';
          let currentplayingdiv =
            document.querySelector('.current-track__progress__start');
          currentplayingdiv.innerText = Math.floor(player.currentTime);
          let currentpendingdiv =
            document.querySelector('.current-track__progress__finish');
          currentpendingdiv.innerText =
            Math.floor(player.duration - player.currentTime);
        }

        player.onended = () => {
          let progressbar =
            document.querySelector('#song-progress .noUi-origin');
          progressbar.style = 'left: 0%';
          if (queue[index + 1]) {
            this.startAudio(queue, index + 1);
          } else {
            this.setState({
              isPlaying: false
            })
          }
        }

        player.play();

        this.setState({
          currentTrackId: queue[index],
          currentTrackDuration: data.duration,
          isPlaying: true
        });
      }
    )
  }

  resumeAudio = () => {
    if (this.state.isPlaying === false) {
      let player = document.getElementById('player');
      player.play();
      this.setState({
        isPlaying: true
      })
    }
  }

  pauseAudio = () => {
    let player = document.getElementById('player');
    player.pause()
    this.setState({
      isPlaying: false
    })
  }

  stopAudio = () => {
    let player = document.getElementById('player');
    player.pause();
    player.currentTime = 0;
    this.setState({
      isPlaying: false
    })
  }

  nextAudio = () => {
    let player = document.getElementById('player');
    const { queue, queueIndex } = this.state;
    if (queue[queueIndex + 1]) {
      this.startAudio(queue, queueIndex + 1);
    } else {
      this.stopAudio();
    }
  }

  prevAudio = () => {
    let player = document.getElementById('player');
    const { queue, queueIndex } = this.state;
    if (queue[queueIndex - 1]) {
      this.startAudio(queue, queueIndex - 1);
    } else {
      this.stopAudio();
    }
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export { AppContext };
export default AppProvider;
