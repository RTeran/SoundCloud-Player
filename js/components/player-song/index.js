

import React, { Component } from 'react'
import { connect }          from 'react-redux'
import {
  View, Text,
  TouchableOpacity
}                           from 'react-native'
import Icon                 from 'react-native-vector-icons/MaterialIcons'
import ImageSong            from '../image-song'
import myTheme              from '../../themes/base-theme'
import {
  playSong,
  pauseSong
}                           from '../../actions/player'
import styles               from './styles'


class PlayerSong extends Component {

    componentDidMount() {
        const { playing } = this.props
        // return ( playing ) ? RNAudioStreamer.pause() : RNAudioStreamer.play()
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        // const { stream_url } = nextProps.song
    		// RNAudioStreamer.setUrl( this.prepareUrl(stream_url) )
    		// RNAudioStreamer.play()
    }

    byUser(user) {
        return `${BY} ${user}`
    }

    playOrPauseButton() {
        const { playing } = this.props

        if (playing) {
            return <Icon name='pause' style={styles.icon} />
        }
        else {
            return <Icon name='play-arrow' style={styles.icon} />
        }
    }

    handlePlayButton() {
        const { playing, playSong, pauseSong } = this.props

        return (playing) ? pauseSong() : playSong()
    }

    handleAddPlaylistButton(song) {
        console.log(song);
    }

    render() {
        const { song, playing } = this.props
        // TODO: Create empty state
        if (!song) return null

        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <ImageSong image={song.artwork_url} />
                <View>
                    <Text>
                        {song.title}
                    </Text>
                    <Text>
                        { this.byUser(song.user.username) }
                    </Text>
                </View>
                <View>
                    <View style={styles.buttons}>
                        <TouchableOpacity
                            onPress={() => this.handlePlayButton(song)}
                            style={styles.button}>
                            { this.playOrPauseButton() }
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.handleAddPlaylistButton(song)}
                            style={styles.button}>
                            <Icon name='playlist-add' style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text>0.00/2:10</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const BY        = 'by'

const mapStateToProps = state => ({ song, playing, paused } = state.player)

const bindAction = dispatch => ({
    playSong: () => dispatch( playSong() ),
    pauseSong: () => dispatch( pauseSong() )
})

export default connect(mapStateToProps, bindAction)(PlayerSong);
