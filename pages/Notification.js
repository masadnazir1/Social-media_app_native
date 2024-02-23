import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../comp/Header'; // Assuming you've created the Header component
import NotificationScreen from '../comp/notifi';

import Alerts from '../comp/Alerts';













const Notification = () => {
  return (
    <View style={styles.container}>
      <Header />

<ScrollView>
  
<Alerts></Alerts>





</ScrollView>
      
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
 
});

export default Notification;
