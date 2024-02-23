import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Alerts = () => {
  const navigation = useNavigation();

  // Dummy notifications data
  const notifications = [
    { id: 1, user: 'John Doe', message: 'Liked your post', time: '2h ago', image: require('../assets/icons/man.png') },
    { id: 2, user: 'Jane Smith', message: 'Commented on your photo', time: '1d ago', image: require('../assets/icons/man.png') },
   
    { id: 12, user: 'John Doe', message: 'Liked your post', time: '2h ago', image: require('../assets/icons/man.png') },
    { id: 21, user: 'Jane Smith', message: 'Commented on your photo', time: '1d ago', image: require('../assets/icons/man.png') },
   
    { id: 111, user: 'John Doe', message: 'Liked your post', time: '2h ago', image: require('../assets/icons/man.png') },
    { id: 221, user: 'Jane Smith', message: 'Commented on your photo', time: '1d ago', image: require('../assets/icons/man.png') },
   

    { id: 15, user: 'John Doe', message: 'Liked your post', time: '2h ago', image: require('../assets/icons/man.png') },
    { id: 24, user: 'Jane Smith', message: 'Commented on your photo', time: '1d ago', image: require('../assets/icons/man.png') },

    { id: 16, user: 'John Doe', message: 'Liked your post', time: '2h ago', image: require('../assets/icons/man.png') },
    { id: 28, user: 'Jane Smith', message: 'Commented on your photo', time: '1d ago', image: require('../assets/icons/man.png') },

    { id: 125, user: 'John Doe', message: 'Liked your post', time: '2h ago', image: require('../assets/icons/man.png') },
    { id: 224, user: 'Jane Smith', message: 'Commented on your photo', time: '1d ago', image: require('../assets/icons/man.png') },

    { id: 126, user: 'John Doe', message: 'Liked your post', time: '2h ago', image: require('../assets/icons/man.png') },
    { id: 228, user: 'Jane Smith', message: 'Commented on your photo', time: '1d ago', image: require('../assets/icons/man.png') },
    // Add more dummy notifications as needed
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notifications</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Search')} style={styles.searchIcon}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.notificationsContainer}>
        {notifications.map(notification => (
          <TouchableOpacity key={notification.id} style={styles.notification}>
            <Image source={notification.image} style={styles.userImage} />
            <View style={styles.notificationContent}>
              <Text style={styles.notificationUser}>{notification.user}</Text>
              <Text style={styles.notificationMessage}>{notification.message}</Text>
              <Text style={styles.notificationTime}>{notification.time}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
    padding:10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 'auto',
  },
  searchIcon: {
    marginLeft: 'auto',
  },
  notificationsContainer: {
    flex: 1,
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  notificationContent: {
    flex: 1,
  },
  notificationUser: {
    fontWeight: 'bold',
  },
  notificationMessage: {
    color: '#666',
  },
  notificationTime: {
    color: '#999',
  },
});

export default Alerts;
