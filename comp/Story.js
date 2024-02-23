import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';

const Story = () => {
  // Dummy data for stories
  const stories = [
    { id: 1, user: 'John Doe', image: require('../assets/icons/man.png') },
    { id: 2, user: 'Jane Smith', image: require('../assets/icons/man.png') },
    { id: 3, user: 'Alex Johnson', image: require('../assets/icons/man.png') },
    { id: 33, user: 'Jane Smith', image: require('../assets/icons/man.png') },
    { id: 32, user: 'Alex Johnson', image: require('../assets/icons/man.png') },
    { id: 35, user: 'Alex Johnson', image: require('../assets/icons/man.png') },
    { id: 333, user: 'Jane Smith', image: require('../assets/icons/man.png') },
    { id: 312, user: 'Alex Johnson', image: require('../assets/icons/man.png') },
    // Add more story data as needed
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {stories.map(story => (
        <View key={story.id} style={styles.storyItem}>
          <Image source={story.image} style={styles.image} />
          <Text style={styles.userName}>{story.user}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  storyItem: {
    marginRight: 10,
    borderRadius: 10,
    overflow: 'x',
    backgroundColor: '#44e5ef',
    height: 150,
    padding: 5,
    
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    padding: 5,
  },
  userName: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Story;
