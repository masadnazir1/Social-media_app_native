import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Videos = () => {
  const [modalVisible, setModalVisible] = useState(false);

  // Dummy video content
  const videoUrl = 'https://www.example.com/video.mp4';

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image source={require('../assets/icons/man.png')} style={styles.userImage} />
          <Text style={styles.userName}>John Doe</Text>
        </View>

        {/* Dots */}
        <View style={styles.dots}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {/* Upload video button */}
        <TouchableOpacity onPress={() => console.log('Upload video button pressed')} style={styles.uploadButton}>
          <Ionicons name="cloud-upload-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Post Video */}
      <View style={styles.videoContainer}>
        <Text style={styles.videoPlaceholder}>Video Placeholder</Text>
        {/* Replace with actual video component */}
        {/* <Video source={{ uri: videoUrl }} style={styles.video} /> */}
      </View>

      {/* Actions */}
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => console.log('Like button pressed')}>
          <Ionicons name="heart-outline" size={24} color="black" style={styles.actionIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Comment button pressed')}>
          <Ionicons name="chatbubble-outline" size={24} color="black" style={styles.actionIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Ionicons name="share-social-outline" size={24} color="black" style={styles.actionIcon} />
        </TouchableOpacity>
      </View>

      {/* Share Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Share Popup</Text>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 80,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dots: {
    flexDirection: 'row',
    marginRight: 1,
    marginLeft: 170,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#333',
    marginRight: 2,
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
  },
  uploadButton: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  videoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    height: 200,
    marginTop: 10,
    borderRadius: 10,
  },
  videoPlaceholder: {
    fontSize: 16,
    color: '#999',
  },
  actions: {
    flexDirection: 'row',
    marginTop: 10,
  },
  actionIcon: {
    marginRight: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  closeButton: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: 'blue',
  },
});

export default Videos;
