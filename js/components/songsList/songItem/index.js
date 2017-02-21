
import React, { Component } from 'react'
import { connect }          from 'react-redux'
import {
	View, Text, Image,
	TouchableOpacity
}                           from 'react-native'
import { Button }           from 'native-base'
import ImageSong            from '../../image-song'
import Icon                 from 'react-native-vector-icons/MaterialIcons'
import I18n                 from 'react-native-i18n'
import myTheme              from '../../../themes/base-theme'
import styles               from './style'
import {
    initPlayer
}                           from '../../../actions/player'

class SongItem extends Component {

    handlePlayButton(item) {
        const { initPlayer, song } = this.props
        if (song && (song.id === item.id)) return null

        return initPlayer(item)
    }

    handleAddPlaylistButton(item) {
        console.log(item);
    }

    fromUser(user) {
        return `${FROM} ${user}`
    }

    render() {
        const { item } = this.props
        const { artwork_url } = item
        return (
            <View style={styles.item}>
                <ImageSong image={artwork_url} />
                <View style={styles.info}>
                    <Text
                      style={styles.title}
                      ellipsizeMode="tail"
                      numberOfLines={NUMBER_OF_LINES_TITLE}>
                        {item.title}
                    </Text>
                    <Text
                      style={styles.user}
                      ellipsizeMode="tail"
                      numberOfLines={NUMBER_OF_LINES_USER}>
                        { this.fromUser(item.user.username) }
                    </Text>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity
                        onPress={() => this.handlePlayButton(item)}
                        style={styles.button}>
                        <Icon
                            name='play-arrow'
                            style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.handleAddPlaylistButton(item)}
                        style={styles.button}>
                        <Icon
                            name='playlist-add'
                            style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const FROM                  = 'from'
const NUMBER_OF_LINES_TITLE = 2
const NUMBER_OF_LINES_USER  = 1

const mapStateToProps = state => ({ song } = state.player)

const bindAction = dispatch => ({
    initPlayer: song => dispatch( initPlayer(song) )
})

export default connect(mapStateToProps, bindAction)(SongItem);
