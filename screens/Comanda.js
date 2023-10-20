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
<<<<<<< HEAD:screens/Jogo.js
      backgroundColor: ['#6959CD' ],
=======
      backgroundColor: '#ADD8E6',
>>>>>>> 2f9a0792c025c7fc30ba09da91f2d434ad0c2fcc:screens/Comanda.js
      alignItems: 'center',
      justifyContent: 'center',
    },
})                           

