
import React, { Component } from 'react'
import {
  Image,
}                           from 'react-native'
import styles               from './styles'


class ImageSong extends Component {

    render() {
        const { image } = this.props
        return (
			      <Image
                style={styles.image}
                source={{uri: image || DEFAULT_BACKGROUND}}
            />
        )
    }
}

const DEFAULT_BACKGROUND = 'https://ih0.redbubble.net/image.106738791.5856/flat,800x800,075,t.jpg'

export default ImageSong
