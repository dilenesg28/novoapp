import { StyleSheet, TextInput } from "react-native"

export default function Input({...props}){
    return (
        <TextInput style={styles.input} {...props} />
    )
}

const styles = StyleSheet.create({
    input: {
<<<<<<< HEAD
        backgroundColor: '#BDB76B',
        borderColor: 'black',
        borderWidth: 8,
        borderColor: 'transparent', // Cor transparente
        borderStyle: 'ridge', // Estilo da borda
        
        borderWidth: 5,
=======
        backgroundColor: '#FFF',
        borderColor: 'gray',
        borderWidth: 1,
>>>>>>> 2f9a0792c025c7fc30ba09da91f2d434ad0c2fcc
        padding: 8,
        borderRadius: 4,
        marginTop: 16,
      },
})