import React from "react";
import {View, Text, Image, Button} from 'react-native';
import styles from "../styles/globalStyles";
import DataHome from "../screens/DataHome";

const Home = ({data}) => {
    return(
        <View style={styles.card}>
            <Image source={DataHome.photo} style={styles.photo}/>
            <Image source={DataHome.photo} style={styles.photo}/>
            <Image source={DataHome.photo} style={styles.photo}/>
            
        </View>

    );

};

export default Home;