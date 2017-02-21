
import React, { Component } from 'react'
import { connect }          from 'react-redux'
import {
    Text, ListView,
    ActivityIndicator
}                           from 'react-native'
import I18n                 from 'react-native-i18n'
import myTheme              from '../../themes/base-theme'
import SongItem             from './songItem'
import styles               from './styles'

class SongsList extends Component {

    constructor(props) {
        super(props);
        this.dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
    }

    loading(isActive) {
        return (
            <ActivityIndicator
                animating={isActive}
                style={styles.loading}
                size="large"/>
        )
    }

    render() {
        const { items, isFetching } = this.props

        // TODO: Create empty state

        if (isFetching) return this.loading(isFetching)

        const dataSource = this.dataSource.cloneWithRows(items);

        return (
            <ListView
                dataSource={dataSource}
                renderRow={item => <SongItem item={item} />}
                enableEmptySections={true}
                style={styles.listView}>
            </ListView>
        );
    }
}


const NUMBER_OF_LINES = 2;

const mapStateToProps = state => ({ items, isFetching } = state.songs)

export default connect(mapStateToProps, null)(SongsList);
