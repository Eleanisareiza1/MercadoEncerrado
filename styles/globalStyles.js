import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'rgba(145, 239, 255, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgb(0, 0, 0)'
    },
    text: {
        fontWeight: 'normal',
        fontSize: 22,
        color: 'rgb(0, 0, 0)',
        textAlign: 'justify',
    },
    card: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 20,
        margin: 20,
        borderRadius: 10,
    },
    categoryCard: {
        padding: 10,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    photo: {
        width: 150,
        height: 150,
        onRepeat: 'none'
    },
    button: {
        padding: 10,
        margin: 15,
        borderRadius: 10,
        backgroundColor: 'rgb(0, 96, 155)',
        alignItems: 'center',
        width: '70%'
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'rgb(0, 0, 0)'
    },
    
});
export default styles;
    
   