import { StyleSheet, Text, View } from "react-native";
import Button from "../components/button";
import Input from "../components/input";

export default function Comanda(){
    return(
        <View style={styles.container}>

            <View>
                <Text>Olá,</Text>
                <Text>Jogador</Text>
            </View>

            <View>
                <Input />
                <Button>confirmar</Button>
            </View>

            <Text>
                Digite o sua senha de acesso 
                para iniciar suas apostas
            </Text>

        </View>

    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCFBFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
})