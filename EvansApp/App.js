import React, {useState, useEffect} from "react"
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import SpotifyLogin from "./SpotifyLogin.js"
import Album from "./Album.js"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [rolled, setRolled] = useState(false);
  const [albums, setAlbums] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      
      { loggedIn ? 
        <View>
        { rolled ? 
          <View style={{alignItems: 'center'}}>
            <Album/>
            <TouchableOpacity style={styles.rerollButton}>
              <Text style={styles.rerollButtonText}>ROLL AGAIN</Text>
            </TouchableOpacity>
          </View>
          : 
          <View style={{top: -150, alignItems: 'center'}}>
            <Text style={styles.text2}>Great you're logged in</Text>
            <Text style={styles.text2}>Now, get an album:</Text>
            <TouchableOpacity style={styles.rollButton} onPress={()=>setRolled(true)}>
              <Text style={styles.rerollButtonText}>GIVE ME AN ALBUM!</Text>
            </TouchableOpacity>
          </View>
          }
        </View>
      :
       <View style={styles.container}>
        <Text style={styles.text}>Hey Evan</Text>
        <Text style={styles.text2}>First, log into spotify:</Text>
        <TouchableOpacity onPress={() => {setLoggedIn(true); console.log(loggedIn)}}>
          <SpotifyLogin/>
        </TouchableOpacity>
        
      </View>
      }
      
    </SafeAreaView>
  )
}

export default App;

function rollAlbum() {

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 32,
    position: 'absolute',
    top: 100,
    fontWeight: 'bold'
  },
  text2: {
    color: 'white',
    fontSize: 22,
    marginBottom: 10,
  },
  rollButton: {
    color: 'white',
    fontSize: 20,
    top: 50,
    width: 300,
    height: 45,
    borderColor: 'green',
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  rerollButton: {
    top: 170,
    width: 300,
    height: 45,
    borderColor: 'green',
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  rerollButtonText: {
    color: 'white',
    fontSize: 17,
  }
});
