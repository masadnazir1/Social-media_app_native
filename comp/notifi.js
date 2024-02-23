import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NotificationScreen = () => {
  // Dummy data for notifications
  const notifications = [
    { id: 1, icon: 'ios-heart', text: 'John liked your post' },
    { id: 2, icon: 'ios-chatbubble', text: 'Mary commented on your photo' },
    { id: 3, icon: 'ios-person-add', text: 'Alex started following you' },
    { id: 4, icon: 'ios-heart', text: 'Jane liked your comment' },
    { id: 21, icon: 'ios-heart', text: 'John liked your post' },
    { id: 22, icon: 'ios-chatbubble', text: 'Mary commented on your photo' },
    { id: 32, icon: 'ios-person-add', text: 'Alex started following you' },
    { id: 42, icon: 'ios-heart', text: 'Jane liked your comment' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.title}>Notifications</Text>
        {/* Render dummy notifications */}
        {notifications.map(notification => (
          <View key={notification.id} style={styles.notification}>
            <Ionicons name={notification.icon} size={24} color="blue" style={styles.icon} />
            <Text style={styles.notificationText}>{notification.text}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  notificationText: {
    fontSize: 16,
  },
});

export default NotificationScreen;
