
import React, { Component } from 'react'
import { connect }          from 'react-redux'
import {
  View, Text, ScrollView
}                           from 'react-native'
import I18n                 from 'react-native-i18n'
import myTheme              from '../../themes/base-theme'

import Searcher             from '../searcher'
import SongList             from '../songsList'


class Search extends Component {

  render() {
    return (
      <View>
        <Searcher />
        <SongList />
      </View>
    )
  }
}

export default Search
