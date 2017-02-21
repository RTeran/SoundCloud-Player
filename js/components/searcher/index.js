
import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import {
  View, Text, ScrollView
}                             from 'react-native'
import I18n                   from 'react-native-i18n'
import myTheme                from '../../themes/base-theme'
const SearchBar               = require('react-native-search-bar')
import {
  searchSongs
}                             from '../../actions/songs'


class Searcher extends Component {

  constructor(props) {
      super(props)
  }

  filter(text) {
      const { searchSongs } = this.props
      searchSongs(text)
  }

  render() {
      return (
          <View style={{backgroundColor: myTheme.backgroundContentCards}}>
              <SearchBar
                  ref={this.props.searchBarRef}
                  placeholder={I18n.t('app.search')}
                  onChangeText={(text) => this.filter(text)}
                  hideBackground={true}
              />
          </View>
      )
  }
}

const bindAction = dispatch => ({
    searchSongs: song => dispatch( searchSongs(song) )
})

export default connect(null, bindAction)(Searcher);
