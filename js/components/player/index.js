
import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import {
  View, Text
}                             from 'react-native'
import I18n                   from 'react-native-i18n'
import myTheme                from '../../themes/base-theme'
import {
  searchSongs
}                             from '../../actions/songs'
import styles                 from './styles'


class Player extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { song } = this.props

        // TODO: Create empty state
        if (!song) return null
        return (
            <View style={{flex: 1}}>
                <Text>
                    {song.title}
                </Text>
            </View>
        )
    }
}


function mapStateToProps(state) {
    return {
      song,
      playing,
      paused
    } = state.player
}

function bindAction(dispatch) {
    return {
        searchSongs: (text) => dispatch( searchSongs(text) )
    }
}

export default connect(mapStateToProps, bindAction)(Player);
