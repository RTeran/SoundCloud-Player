
'use strict';

var React           = require('react-native');
import myTheme      from '../../themes/base-theme';
// var Dimensions      = require('Dimensions');
// var windowSize     = Dimensions.get('window');

var { StyleSheet }  = React;

module.exports = StyleSheet.create({
    listView: {
        backgroundColor: myTheme.light
    },
    listItem: {
      overflow: 'hidden'
    },
    image: {
        width: 40,
        height: 40
    },
    title: {
        color: myTheme.primaryText
    },
    description: {
        fontSize: 14,
        color: myTheme.secondaryText
    },
    loading: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        height: 80
    }
});
