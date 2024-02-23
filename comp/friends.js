import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Friends = () => {
  const [requests, setRequests] = useState([
    { id: 1, user: 'John Doe', image: require('../assets/icons/man.png'), mutualFriends: ['user2', 'user3', 'user4'], status: 'pending' },
    { id: 2, user: 'Jane Smith', image: require('../assets/icons/man.png'), mutualFriends: ['user1', 'user3'], status: 'pending' },
    
    { id: 11, user: 'John Doe', image: require('../assets/icons/man.png'), mutualFriends: ['user2', 'user3', 'user4'], status: 'pending' },
    { id: 21, user: 'Jane Smith', image: require('../assets/icons/man.png'), mutualFriends: ['user1', 'user3'], status: 'pending' },
    
    { id: 111, user: 'John Doe', image: require('../assets/icons/man.png'), mutualFriends: ['user2', 'user3', 'user4'], status: 'pending' },
    { id: 211, user: 'Jane Smith', image: require('../assets/icons/man.png'), mutualFriends: ['user1', 'user3'], status: 'pending' },
    
    { id: 411, user: 'John Doe', image: require('../assets/icons/man.png'), mutualFriends: ['user2', 'user3', 'user4'], status: 'pending' },
    { id: 51, user: 'Jane Smith', image: require('../assets/icons/man.png'), mutualFriends: ['user1', 'user3'], status: 'pending' },


    // Add more dummy requests as needed
  ]);

  const handleAccept = (id) => {
    const updatedRequests = requests.map(request => {
      if (request.id === id) {
        return { ...request, status: 'accepted' };
      }
      return request;
    });
    setRequests(updatedRequests);
  };

  return (
    <View style={styles.container}>
      {requests.map(request => (

        <View style={styles.mainbox}>

        <View key={request.id} style={styles.request}>

          <Image source={request.image} style={styles.userImage} />
          <View style={styles.userInfo}>

            <Text style={styles.userName}>{request.user}</Text>

            <View style={styles.mutualFriendsContainer}>
              {request.mutualFriends.map((friend, index) => (
                <Image key={index} source={require('../assets/icons/man.png')} style={styles.mutualFriendImage} />
              ))}
              <Text style={styles.mutualFriendsText}>+{request.mutualFriends.length} mutual friends</Text>
            </View>




          </View>

          </View>


          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => console.log('Remove request')} style={[styles.button, styles.removeButton]}>
              <Ionicons name="close" size={24} color="white" style={styles.buttonIcon} />
              <Text style={[styles.buttonText, styles.removeButtonText]}>Remove</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleAccept(request.id)} style={[styles.button, styles.acceptButton]}>
              <Ionicons name="checkmark" size={24} color="white" style={styles.buttonIcon} />
              <Text style={[styles.buttonText, styles.acceptButtonText]}>Accept</Text>
            </TouchableOpacity>
          </View>









        </View>



      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 80,
    flexDirection: 'column',
    backgroundColor: '#d7fff7',
  },



  mainbox:{

    marginTop: 5,



  },



  request: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 5,
    backgroundColor: '#e4ffc5',
    
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  mutualFriendsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  mutualFriendImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 5,
  },
  mutualFriendsText: {
    color: '#999',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 5,
    
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  removeButton: {
    backgroundColor: 'red',
    width: '45%',
  },
  acceptButton: {
    backgroundColor: 'green',
    width: '50%',
  },
  buttonText: {
    marginLeft: 5,
    fontSize: 14,
  },
  removeButtonText: {
    color: 'white',
  },
  acceptButtonText: {
    color: 'white',
  },
  buttonIcon: {
    marginRight: 5,
  },
});

export default Friends;
