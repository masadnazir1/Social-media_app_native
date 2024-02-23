import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../comp/Header'; // Assuming you've created the Header component
import Videos from '../comp/Videos';






const Watch = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
       <Videos></Videos>
       <Videos></Videos>
       <Videos></Videos>
       <Videos></Videos>
       <Videos></Videos>
       <Videos></Videos>
       <Videos></Videos>
       <Videos></Videos>
       <Videos></Videos>
       <Videos></Videos>
       <Videos></Videos>
       <Videos></Videos>
        {/* Add more VidComp components as needed */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});

export default Watch;
