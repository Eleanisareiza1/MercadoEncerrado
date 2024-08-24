import React from "react";
import {View, Text, Image, Button, FlatList} from 'react-native';
import Home from "../components/RegisterComp";
import styles from "../styles/globalStyles";
import Register from "../components/RegisterComp";

const data = [ {
    id:1,
    foto: ('https://images.ctfassets.net/denf86kkcx7r/15HC92CcCjQEg7U14aZkVM/914db181ce7e407bc2a0220436a32aa4/un_gato_persa-39'),
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
