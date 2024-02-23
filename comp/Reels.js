import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Reels = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  // Dummy video data
  const videos = [
    { id: 1, url: require('../assets/icons/vid.mp4') },
    { id: 2, url: require('../assets/icons/vid.mp4') },
    { id: 3, url: require('../assets/icons/vid.mp4') },
    // Add more dummy videos as needed
  ];

  return (
    <View style={styles.container}>
      {/* Back button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      {/* Create and search buttons */}
      <View style={styles.topButtons}>
        <TouchableOpacity onPress={() => console.log('Create button pressed')} style={styles.createButton}>
          <Ionicons name="add-circle" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Search button pressed')} style={styles.searchButton}>
          <Ionicons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Video content */}
      <ScrollView style={styles.videoContainer}>
        {videos.map(video => (
          <View key={video.id} style={styles.video}>
            {/* Replace with actual video component */}
            <Text style={styles.videoPlaceholder}>Video Placeholder</Text>
          </View>
        ))}
      </ScrollView>

      {/* User info and action buttons */}
      <View style={styles.bottomContainer}>
        <View style={styles.userInfo}>
          <Image source={require('../assets/icons/man.png')} style={styles.userImage} />
          <Text style={styles.userName}>John Doe</Text>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity onPress={() => console.log('Like button pressed')} style={styles.actionButton}>
            <Ionicons name="heart-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Comment button pressed')} style={styles.actionButton}>
            <Ionicons name="chatbubble-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.actionButton}>
            <Ionicons name="share-social-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('More options pressed')} style={styles.moreOptionsButton}>
            <Ionicons name="ellipsis-horizontal-sharp" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Share Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.modalContainer}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Share Popup</Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  topButtons: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 1,
    flexDirection: 'row',
  },
  createButton: {
    marginRight: 20,
  },
  searchButton: {},
  videoContainer: {
    flex: 1,
    height: '100%'
  },
  video: {
    height: 300,
    marginVertical: 10,
    backgroundColor: '#000',
    
  },
  videoPlaceholder: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  followButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    margin: 5,
  },
  followButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  actionButtons: {
    flexDirection: 'collum',
    alignItems: 'center',
    
  },
  actionButton: {
    marginLeft: 10,
    margin: 5,
  },
  moreOptionsButton: {
    marginLeft: 'auto',
    margin: 5,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Reels;
