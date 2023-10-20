import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Button from '../components/button';
import Input from '../components/input';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Image style={styles.image} source={require('../assets/home.png')} />
      <Text>Sistema</Text>
      <Text style={styles.title}>Jogo</Text>
=======
      <Image style={styles.image} source={require('../assets/home.ico')} />
      <Text>Bingo</Text>
      <Text style={styles.title}>Jogador</Text>
>>>>>>> 2f9a0792c025c7fc30ba09da91f2d434ad0c2fcc

      <Input placeholder='e-mail'/>
      <Input placeholder='senha' secureTextEntry/>

<<<<<<< HEAD
      <Button onPress={() => navigation.navigate('Jogo')}>
=======
      <Button onPress={() => navigation.navigate('Jogador')}>
>>>>>>> 2f9a0792c025c7fc30ba09da91f2d434ad0c2fcc
        Entrar
      </Button>
      
      <TouchableOpacity >
        <Text>criar conta</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor:'#32CD32',
=======
    backgroundColor: '#A9A9A9',
>>>>>>> 2f9a0792c025c7fc30ba09da91f2d434ad0c2fcc
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#121A2C',    
    fontSize: 34,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#FFF',
    borderColor: 'black',
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
    marginTop: 16,
  }, 
  button:{
    backgroundColor: '#121A2C',
    color: '#FFBA26',
    paddingVertical: 8,
    paddingHorizontal: 48,
    borderRadius: 4,
    marginTop: 16,
    marginBottom: 16
  },
  image: {
    height: 200,
    width: '100%',
    position: 'absolute',
    top: 0,
  }
})
;