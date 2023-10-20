import { StyleSheet, Text, View } from "react-native";
import Button from "../components/button";
import Input from "../components/input";

export default function Jogo({navigation}){
    return(

            <View style={styles.container}>

                <View>
                    <Text>Olá,</Text>
                    <Text>Login</Text>
                </View>

                <View>
                    <Input />
                    <Button onPress={() => navigation.navigate("Produtos")}>confirmar</Button>
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
      backgroundColor: ['#6959CD' ],
      alignItems: 'center',
      justifyContent: 'center',
    },
})                           

