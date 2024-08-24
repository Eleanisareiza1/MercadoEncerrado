import React from 'react';
import {View, Text, Image, Button, FlatList} from 'react-native';
import Home from '../components/HomeComp';

const data = [
{
    id: 1,
    photo1:'https://www.clarin.com/2022/05/02/CYWDBezE0_360x240__1.jpg',
    More: 'hola',

},
{
    id: 2,
    photo2:'https://img.global.news.samsung.com/cl/wp-content/uploads/2023/05/dl5_Galaxy-A54-5G_Awesome-Graphite_Front-e1683749755408.jpg',
    More: 'hola',
},
{
    id: 3,
    photo3:'https://img.freepik.com/foto-gratis/renderizacion-dispositivo-hogar-inteligente_23-2151039302.jpg',
    More: 'hola',
},
]

const DataHome= () => {
    return(
      <View>
        <Text>Mercado Encerrado</Text>
        <FlatList
        data={data}
        renderItem={({item}) => <Home data={item}/>}
        keyExtractor={(item) => item.id.toString()}
        />
      </View>
    )
  };
export default DataHome;