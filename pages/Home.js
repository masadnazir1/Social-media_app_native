import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../comp/Header';
import AddPost from '../comp/AddPost';
import Story from '../comp/Story';
import Post from '../comp/Post';
import ShowReel from '../comp/ShowReel';












const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.content}>
          <AddPost />
          <Story />
          <Post />
          <Post />
          <Post />
          <Post />
<ShowReel></ShowReel>

          {/* Add more posts as needed */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 15,
  },
});

export default Home;
