/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';

const App = () => {
  useEffect(async () => {
    await Analytics.setEnabled(true);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />

      <View style={styles.viewContainer}>
        <Text style={styles.titleTxt}>
          This is React Native CI CD Demo app with App Center
        </Text>
        <Pressable
          onPress={() => {
            Crashes.generateTestCrash();
          }}>
          <Text style={styles.crashTxt}>Click to Crash App</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  viewContainer: {
    padding: 20,
    backgroundColor: 'white',
  },
  titleTxt: {
    fontSize: 20,
    textAlign: 'center',
  },
  crashTxt: {
    textAlign: 'center',
    fontSize: 20,
    padding: 20,
  },
});

export default App;
