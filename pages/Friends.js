import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../comp/Header';
import Friendsrequest from '../comp/friends';

const Friends = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Friendsrequest />
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

export default Friends;
