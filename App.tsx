import { SafeAreaView, StatusBar, Text } from 'react-native';
import React from 'react';
import Router from './src/routes/Router';
import colorString from './src/constants/colorString';
import Provider from './src/contexts/Provider';

type Props = {};

const App = (props: Props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colorString.MAIN }}>
      <Provider>
        <Router />
        <StatusBar backgroundColor={colorString.MAIN} />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
