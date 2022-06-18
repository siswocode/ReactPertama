import React from 'react';
import {Text, View, Image} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{width: 80, heigt: 80, backgroundColor: '#0abde3'}} />
      <Text>Siswo</Text>
      <Aryanto />
    </View>
  );
};

const Aryanto = () => {
  return <Text>Aryantoaaa</Text>;
};

export default App;
