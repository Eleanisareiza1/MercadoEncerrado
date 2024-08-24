import React from "react";
import {View, Text, Image, Button} from 'react-native';
import styles from "../styles/globalStyles";
import DataHome from "../screens/DataHome";
import DataShopping from "../screens/DataShopping";

const Shopping = ({data}) => {
    return(
        <View style={styles.card}>
            <Image source={{uri: data.photo}} style={styles.photo}/>
            <Image source={{uri: data.photo}} style={styles.photo}/>
            <Image source={{uri: data.photo}} style={styles.photo}/>
            <Text>Estas son tus compras{data.compras} </Text>
            <Button title='Comprar'></Button> 
        </View>

    );

};

export default Shopping;