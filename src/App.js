import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Config from "react-native-config";
import setup from './setup';
import { HookManager } from 'webpremios-app-hook';
import * as Target from 'target';


const modules = require.getModules();
const moduleIds = Object.keys(modules);
const loadedModuleNames = moduleIds
  .filter(moduleId => modules[moduleId].isInitialized)
  .map(moduleId => modules[moduleId].verboseName);
const waitingModuleNames = moduleIds
  .filter(moduleId => !modules[moduleId].isInitialized)
  .map(moduleId => modules[moduleId].verboseName);

// make sure that the modules you expect to be waiting are actually waiting
console.log(
  'loaded:',
  loadedModuleNames.length,
  'waiting:',
  waitingModuleNames.length
);

// grab this text blob, and put it in a file named packager/modulePaths.js
console.log(`module.exports = ${loadedModuleNames.sort().join("\n")};`);




 // GLOBAL SETUP
setup();

// THEME SETUP
Target.setup();


export default class App extends React.Component {

  renderBottomBar(){
    let list = HookManager.applyFilter("listMenuBar", []);
    return list.map( item => item.component);
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>You are viewing app!!</Text>

        { this.renderBottomBar() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
