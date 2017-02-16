
import React, { Component } from 'react'
import { connect }          from 'react-redux'
import {
  View, Text, ScrollView,
  TouchableWithoutFeedback
}                           from 'react-native'
import I18n                 from 'react-native-i18n'
import myTheme              from '../../themes/base-theme'

import Searcher             from '../searcher'
import SongList             from '../songsList'


class Search extends Component {

  searchBarBlur(e) {
    return this.SearchBar.blur() || null
  }

  render() {
    return (
      <View>
        <Searcher searchBarRef={ SearchBar => this.SearchBar = SearchBar } />
        <TouchableWithoutFeedback onPress={ () => this.searchBarBlur() }>
            <View>
                <SongList />
            </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

export default Search
