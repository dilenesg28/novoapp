import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Button from '../components/button';
import Input from '../components/input';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/home.png')} />
      <Text>Sistema</Text>
      <Text style={styles.title}>Jogo</Text>

      <Input placeholder='e-mail'/>
      <Input placeholder='senha' secureTextEntry/>

      <Button onPress={() => navigation.navigate('Jogo')}>
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
    backgroundColor:'#32CD32',
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
});
