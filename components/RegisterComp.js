import React from "react";
import {View, Text, Image, Button} from 'react-native';
import styles from "../styles/globalStyles";

const Register = ({data}) => {
    return(
        <View style={styles.card}>
            <Image source={{uri:'data.photo'}} style={styles.photo}/>
            <Text>Usuario {data.user}</Text> 
            <Text>Contraseña{data.password} </Text>
            <Text>Correo{data.email}</Text>
            <Text>Fecha De Nacimiento{data.date}</Text>
            <Text>Direccion{data.address}</Text>
            <Text>Pais{data.country}</Text>
            <Text>Departamento{data.departament}</Text>
            <Text>Ciudad{data.city}</Text>
            <Button title='Registra'></Button>
        </View>

    );

};

export default Register;