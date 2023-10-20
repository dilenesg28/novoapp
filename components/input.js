import { StyleSheet, TextInput } from "react-native"

export default function Input({...props}){
    return (
        <TextInput style={styles.input} {...props} />
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#BDB76B',
        borderColor: 'black',
        borderWidth: 8,
        borderColor: 'transparent', // Cor transparente
        borderStyle: 'ridge', // Estilo da borda
        
        borderWidth: 5,
        padding: 8,
        borderRadius: 4,
        marginTop: 16,
      },
})