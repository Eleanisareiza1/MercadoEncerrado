import React from "react";
import {View, Text, Image, Button} from 'react-native';
import styles from "../styles/globalStyles";
import DataLogin from "../screens/DataLogin";

const Login = ({data}) => {
    return(
        <View style={styles.card}>
            <Image source={{uri: data.photo}} style={styles.photo}/>
            <Text style={styles.text}>Usuario: {data.user}</Text> 
            <Text style={styles.text}>Contraseña: {data.password} </Text>
            <Button title='Ingresar'></Button>
            <Button title='Registrarme'></Button>
        </View>

    );

};

export default Login;