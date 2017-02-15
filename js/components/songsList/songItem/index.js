
import React, { Component } from 'react'
import { connect }          from 'react-redux'
import {
  View, Text, Image,
  TouchableOpacity
}                           from 'react-native'
import { Button }           from 'native-base'
import Icon                 from 'react-native-vector-icons/MaterialIcons'
import I18n                 from 'react-native-i18n'
import myTheme              from '../../../themes/base-theme'
import styles               from './style'

class SongItem extends Component {

    fromUser(user) {
        return `${FROM} ${user}`
    }

    render() {
        const { item } = this.props
        const { artwork_url } = item
        return (
            <View style={styles.item}>
                <Image
                    style={styles.image}
                    source={{uri: artwork_url || DEFAULT_BACKGROUND}}
                />
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
                    <TouchableOpacity style={styles.button}>
                        <Icon
                            name='play-arrow'
                            style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon
                            name='playlist-add'
                            style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const DEFAULT_BACKGROUND    = 'https://ih0.redbubble.net/image.106738791.5856/flat,800x800,075,t.jpg'
const FROM                  = 'from'
const NUMBER_OF_LINES_TITLE = 2
const NUMBER_OF_LINES_USER  = 1


export default SongItem;
