
import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import {
  View, Text
}                             from 'react-native'
import I18n                   from 'react-native-i18n'
import myTheme                from '../../../themes/base-theme'


class SongItem extends Component {

  render() {
    const { item } = this.props
    return (
        <View>
            <Text>
                {item.title}
            </Text>
        </View>
    )
  }
}


export default SongItem;
