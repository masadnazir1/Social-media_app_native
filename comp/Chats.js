import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

const Chats = () => {
  // Dummy chat data
  const chats = [
    { id: 1, user: 'John Doe', image: require('../assets/icons/man.png'), status: 'offline', lastSeen: '2 hours ago' },
    { id: 2, user: 'Jane Smith', image: require('../assets/icons/man.png'), status: 'online', lastSeen: 'Just now' },
    { id: 3, user: 'Alice Johnson', image: require('../assets/icons/man.png'), status: 'offline', lastSeen: 'Yesterday' },
    
    
    { id: 21, user: 'John Doe', image: require('../assets/icons/man.png'), status: 'offline', lastSeen: '2 hours ago' },
    { id: 22, user: 'Jane Smith', image: require('../assets/icons/man.png'), status: 'online', lastSeen: 'Just now' },
    { id: 321, user: 'Alice Johnson', image: require('../assets/icons/man.png'), status: 'offline', lastSeen: 'Yesterday' },
    
    { id: 144, user: 'John Doe', image: require('../assets/icons/man.png'), status: 'offline', lastSeen: '2 hours ago' },
    { id: 23, user: 'Jane Smith', image: require('../assets/icons/man.png'), status: 'online', lastSeen: 'Just now' },
    { id: 35, user: 'Alice Johnson', image: require('../assets/icons/man.png'), status: 'offline', lastSeen: 'Yesterday' },
    
    { id: 1444, user: 'John Doe', image: require('../assets/icons/man.png'), status: 'offline', lastSeen: '2 hours ago' },
    { id: 273, user: 'Jane Smith', image: require('../assets/icons/man.png'), status: 'online', lastSeen: 'Just now' },
    { id: 355, user: 'Alice Johnson', image: require('../assets/icons/man.png'), status: 'offline', lastSeen: 'Yesterday' },

    { id: 14434, user: 'John Doe', image: require('../assets/icons/man.png'), status: 'offline', lastSeen: '2 hours ago' },
    { id: 2723, user: 'Jane Smith', image: require('../assets/icons/man.png'), status: 'online', lastSeen: 'Just now' },
    { id: 3155, user: 'Alice Johnson', image: require('../assets/icons/man.png'), status: 'offline', lastSeen: 'Yesterday' },
    // Add more dummy chats as needed
  ];

  return (
    <View style={styles.container}>
      {/* Horizontal scrollable list of user images */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.imageList}>
        {chats.map(chat => (
          <View key={chat.id} style={styles.imageContainer}>
            <Image source={chat.image} style={styles.userImage} />
          </View>
        ))}
      </ScrollView>
      
      {/* List of chats */}
      <ScrollView>
        {chats.map(chat => (
          <View key={chat.id} style={styles.chatContainer}>
            <Image source={chat.image} style={styles.chatUserImage} />
            <View style={styles.chatInfo}>
              <Text style={styles.userName}>{chat.user}</Text>
              <Text style={styles.status}>{chat.status === 'online' ? 'Online' : `Last seen: ${chat.lastSeen}`}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 0,
  },
  imageList: {
    flexDirection: 'row',
    
  },
  imageContainer: {
    marginRight: 10,
    marginTop: 15,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#70dcd2',
    margin: 3,
    padding: 3,
   
  },
  chatUserImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  chatInfo: {
    flex: 1,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  status: {
    color: '#666',
  },
});

export default Chats;
