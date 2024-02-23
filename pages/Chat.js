import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../comp/Header'; // Assuming you've created the Header component
import Chats from '../comp/Chats';










const Chat = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>

      <Chats></Chats>

      </View>




    
        
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content: {
    flex: 1,
    marginTop: 80,
  },
});

export default Chat;
