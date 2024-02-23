import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

const AddPost = () => {
  return (
    <View style={styles.container}>
      {/* User picture */}
      <Image source={require('../assets/icons/man.png')} style={styles.userImage} />
      {/* Text input placeholder */}
      <TextInput
        placeholder="What's on your mind?"
        placeholderTextColor="#999"
        style={styles.input}
      />
      {/* Icon */}
      <Image source={require('../assets/icons/picture.png')} style={styles.userImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 1,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
    marginTop: '10%'
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
});

export default AddPost;
