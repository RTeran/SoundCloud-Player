
import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { actions }            from 'react-native-navigation-redux-helpers';
import myTheme                from '../../themes/base-theme';
import {
  View, Text, ScrollView,
  Dimensions
}                             from 'react-native'
import ScrollableTabView,
  { ScrollableTabBar }        from 'react-native-scrollable-tab-view';
import DefaultTabBar          from './defaultTabBar'
import Search                 from '../search'
import PlayerSong             from '../player-song'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

class Tabs extends Component {

  render() {
      return (
          <View>
              <ScrollableTabView
                  style={{ height: height - (TAB_HEIGHT + PLAYER_HEIGHT) }}
                  initialPage={0}
                  renderTabBar={() => <DefaultTabBar />}
                  tabBarPosition='top'
                  tabBarTextStyle={{flex: 1}}
              >
                  <ScrollView tabLabel="Search">
                      <Search />
                  </ScrollView>

                  <ScrollView tabLabel="Queue">
                      <View>
                          <Text>Queue</Text>
                      </View>
                  </ScrollView>

                  <ScrollView tabLabel="About">
                      <View>
                          <Text>About</Text>
                      </View>
                  </ScrollView>
              </ScrollableTabView>
              <PlayerSong />
          </View>
      );
  }
}

const TAB_HEIGHT = 63
const PLAYER_HEIGHT = 63

export default Tabs
