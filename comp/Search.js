import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';



const Search = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>

        <Header></Header>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#999"
          autoFocus
          // Implement search functionality as needed
        />
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/* Add search results or other content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 85,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
  },
  searchButton: {
    marginLeft: 10,
  },
});

export default Search;
