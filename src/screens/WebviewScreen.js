import React from 'react';
import {View , Text , StyleSheet } from 'react-native';
import {WebView} from 'react-native-webview';

const WebviewScreen = () => {
    return (
        <WebView source={{ uri: 'https://www.arcgis.com/apps/opsdashboard/index.html#/85320e2ea5424dfaaa75ae62e5c06e61' }} />
    );
}

const styles = StyleSheet.create({});

export default WebviewScreen;