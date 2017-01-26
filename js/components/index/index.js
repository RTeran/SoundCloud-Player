
import React, { Component }   from 'react';
import Platform               from 'react-native';
import { connect }            from 'react-redux';
import I18n                   from 'react-native-i18n';
import myTheme                from '../../themes/base-theme';
import Tabs                   from '../tabs';
import  {
  Container, Content,
  Text, Header, Button,
  Icon, Title
} from 'native-base';


class Index extends Component {

  constructor() {
    super()
    this.state = {
      headerWidth: 0
    }
  }


  getWidth(layout) {
    const { width } = layout;
    this.setState({ headerWidth: width })
  }

  render() {
    return (
      <Container theme={ myTheme }>
        <Content>
          <Header>
            <Title>{ I18n.t('home.title') }</Title>
          </Header>
          <Tabs />
        </Content>
      </Container>
    );
  }
}

export default Index;
