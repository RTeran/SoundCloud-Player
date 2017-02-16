import { StyleSheet, Platform } from 'react-native'
import myTheme                  from '../../themes/base-theme';


module.exports = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: myTheme.light,
        height: 70,
        padding: 5,
        borderBottomWidth: 1,
        borderColor: myTheme.divider
    },
    image: {
        height: 60,
        width: 60,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    info: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 5
    },
    title: {
        fontWeight: 'bold'
    },
    user: {
        color: myTheme.secondaryText
    },
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
