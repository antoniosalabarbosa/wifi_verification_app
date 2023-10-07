import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NetInfo from "@react-native-community/netinfo";

export default function App() {

  const [wifiState, setWifiState] = useState(false);

  NetInfo.fetch()
  .then( state => {
    console.log("Connection Type: ", state.type);
    console.log("Is connected? ", state.isConnected);

    setWifiState(state.isConnected);
  });

  return (
    <View style={styles.container}>
      <Text>
        { wifiState ? "+ Connected" : "- Disconnected" }
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
