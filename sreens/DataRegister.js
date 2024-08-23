import React from "react";
import {View, Text, Image, Button} from 'react-native';
import Home from "../components/RegisterComp";
import styles from "../styles/globalStyles";
import Register from "../components/RegisterComp";

const data = [ {
    id:1,
    foto:'',
    user:'hola',
    password:'hola',
    email: 'hola',
    date: 'hola',
    address:'hola',
    country:'hola',
    departament:'hola',
    city:'hola'
}
];

const DataRegister = () => {
    return(
      <View>
        <Text>Mercado Encerrado</Text>
        <FlatList
        data={data}
        renderItem={({item}) => <Register data={item}/>}
        keyExtractor={(item) => item.id.toString()}
        />
      </View>
    )
  };

export default DataRegister;
