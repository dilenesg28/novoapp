import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View,ImageBackground } from 'react-native';
import Button from './components/button';
import Input from './components/input';

const imgbg1 = './assets/home.ico'
export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/home.ico')} />
          <Text>Jogo Online</Text>
          <Text style={styles.title}>Aposte</Text>

          <Input placeholder='e-mail'/>
          <Input placeholder='senha' secureTextEntry/>

          <Button>Entrar</Button>
          
          <TouchableOpacity>
            <Text>criar conta</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4682B4',
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
    borderColor: 'gray',
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