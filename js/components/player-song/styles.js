import { StyleSheet, Platform } from 'react-native'
import myTheme                  from '../../themes/base-theme';


module.exports = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        justifyContent: 'center',
        padding: 7,
    },
    icon: {
        color: myTheme.primaryText,
        fontSize: 24
    },
});
