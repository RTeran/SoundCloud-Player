
import React, { Component } from 'react'
import { connect }          from 'react-redux'
import {
    Text, ListView
}                           from 'react-native'
import I18n                 from 'react-native-i18n'
import myTheme              from '../../themes/base-theme'
import SongItem             from './songItem'
import { searchSongs }      from '../../actions/songs'
import styles               from './styles'

class SongsList extends Component {

    constructor(props) {
        super(props);
        this.dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
    }

    renderItem(item) {
        return (
            <View
                style={styles.listItem}>
                <Text>
                    {item.title}
                </Text>
            </View>
        )
    }


    render() {
        const { songs } = this.props
        // TODO: make loading indicator

        const dataSource = this.dataSource.cloneWithRows(songs);

        return (
            <ListView
                dataSource={dataSource}
                renderRow={item => <SongItem item={item}/>}
                enableEmptySections={true}
                style={styles.listView}>
            </ListView>
        );
    }
}


const NUMBER_OF_LINES = 2;


function mapStateToProps(state) {
    return state.songs
}

function bindAction(dispatch) {
    return {
        searchSongs: (text) => dispatch( searchSongs(text) )
    }
}

export default connect(mapStateToProps, bindAction)(SongsList);
