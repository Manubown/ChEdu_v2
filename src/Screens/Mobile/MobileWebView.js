import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

export default class MobileWebView extends Component {
  render() {
    return (
      <WebView
        source={{
          uri: 'https://chedu.at/',
        }}
        style={{marginTop: 20}}
      />
    );
  }
}
