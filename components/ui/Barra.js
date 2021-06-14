import React from 'react';
import {Button} from 'react-native-paper';

const BarraSuperior = ({navigation, route}) => {

    const handlePress = () => {
        navigation.navigate("NuevoCliente")
    }

    return (  
        <Button icon="plus-circle" color="#FFF" onPress={ () => handlePress()}>
            cliente
        </Button>
    );
}
export default BarraSuperior;