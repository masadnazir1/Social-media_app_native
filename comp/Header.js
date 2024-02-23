import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';









const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/Logo.png')} style={styles.logo} />
      {/* Navigation icons */}
      <View style={styles.iconsContainer}>
        {/* Add navigation icons here */}
        {/* For demo purposes, let's add icons with onPress handlers */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/icons/home.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Friends')}>
          <Image source={require('../assets/icons/friends.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Image source={require('../assets/icons/chat.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Image source={require('../assets/icons/notification.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Watch')}>
          <Image source={require('../assets/icons/film.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')} style={styles.searchIcon}>
        <Image source={require('../assets/icons/paper.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // Adjust according to your status bar height
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    width: 80,
    height: 20,
    marginTop: 30,
  },
  iconsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 20,
  },
});

export default Header;
