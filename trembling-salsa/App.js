import * as React from 'react';
import { Text, View, StyleSheet,ImageBackground} from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground source={require('https://www.google.com/search?q=india&source=lnms&tbm=isch&sa=X&ved=0ahUKEwioz5GX7sfgAhWKHKYKHZS1ACYQ_AUIECgD&biw=1366&bih=608#imgrc=sFxqnVfHAoKOhM')} style={styles.container}>
        <Text style={styles.paragraph}>
          Change code in the editor and watch it change on your phone! Save to get a shareable url.
        </Text>
        <Card>
          <AssetExample />
        </Card>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
