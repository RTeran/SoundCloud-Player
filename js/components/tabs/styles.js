import {
  StyleSheet,
  Platform
}               from 'react-native';
import myTheme  from '../../themes/base-theme';

module.exports = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: myTheme.light
  },
  tabs: {
    height: (Platform.OS === 'ios') ? 40 : 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: myTheme.light,
  },
  tabUnderlineStyle: {
    position: 'absolute',
    height: 4,
    backgroundColor: myTheme.primary,
    bottom: 0
  }
});
