import { SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import Router from './src/routes/Router';
import colorString from './src/constants/colorString';
import Provider from './src/contexts/Provider';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: colorString.MAIN }}>
        <Provider>
          <Router />
          <StatusBar backgroundColor={colorString.MAIN} />
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
