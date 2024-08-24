import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Login from './LoginComp';
import Shopping from './ShoppingComp';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu} style={styles.hamburgerButton}>
        <Text style={styles.hamburgerText}>☰</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.menu}>
          <Text style={styles.menuItem}>Home</Text>
          <Text style={styles.menuItem}>Profile</Text>
          <Text style={styles.menuItem}>Settings</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      paddingTop: 50,
      paddingHorizontal: 20,
    },
    hamburgerButton: {
      backgroundColor: '#333',
      padding: 10,
      borderRadius: 5,
    },
    hamburgerText: {
      color: '#fff',
      fontSize: 24,
    },
    menu: {
      marginTop: 10,
      backgroundColor: '#ddd',
      padding: 10,
      borderRadius: 5,
    },
    menuItem: {
      padding: 10,
      fontSize: 18,
    },
  });
  
  export default HamburgerMenu;