import React from 'react';
import {View, Text, Image, Button, FlatList} from 'react-native';
import Home from '../components/HomeComp';
import Shopping from '../components/ShoppingComp'

const data = [
{
    id: 1,
    photo:('https://img.freepik.com/foto-gratis/renderizacion-dispositivo-hogar-inteligente_23-2151039316.jpg'),
    More: 'hola',

},
{
    id: 2,
    photo:'https://img.freepik.com/fotos-premium/camara-seguridad-luz-azul-ella-adecuada-ilustrar-sistemas-seguridad-vigilancia-o-conceptos-tecnologicos_153912-177681.jpg',
    More: 'hola',
},
{
    id: 3,
    photo:'https://d34vmoxq6ylzee.cloudfront.net/wysiwyg/Interiores_CTA.jpg',
    More: 'hola',
},
]

const DataShopping= () => {
    return(
      <View>
        <Text>Mercado Encerrado</Text>
        <FlatList
        data={data}
        renderItem={({item}) => <Shopping data={item}/>}
        keyExtractor={(item) => item.id.toString()}
        />
      </View>
    )
  };
export default DataShopping;