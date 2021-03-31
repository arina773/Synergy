import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button,
  OpaqueColorValue
} from 'react-native';
import Internship from './Internship'

export default class NotificationScreen extends Component {


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Try searching for #discussions..."
                underlineColorAndroid='transparent'
                onChangeText={(name_address) => this.setState({name_address})}/>
          </View>

            <TouchableOpacity style={styles.btnSend}>
              <Image source={{uri:"https://img.icons8.com/small/75/ffffff/filled-sent.png"}} style={styles.iconSend}  />
            </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.popular}>Popular now</Text>
          <Text style={styles.hashtag}>#Web_design</Text>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Internship')}>
            <Text style={styles.hashtag}>#Internships</Text>
          </TouchableOpacity>
          <Text style={styles.hashtag}>#Peogect_Managment</Text>
          <Text style={styles.hashtag}>#Online_Sources_To_Learn</Text>
          <Text style={styles.hashtag}>#Graphic_Design</Text>
          <Text style={styles.hashtag}>#Programing</Text>
          <Text style={styles.hashtag}>#Jobs</Text>
          <Text style={styles.hashtag}>#Mentorship</Text>
          <Text style={styles.hashtag}>#Need_Funding</Text>
          <Text style={styles.hashtag}>#Project_Ideas</Text>
          <Text style={styles.hashtag}>#Learn_From_Professionals</Text>
          
          <Text style={styles.hashtag}>#Web_design</Text>
          <Text style={styles.hashtag}>#Internships</Text>
          <Text style={styles.hashtag}>#Peogect_Managment</Text>
          <Text style={styles.hashtag}>#Online_Sources_To_Learn</Text>
          <Text style={styles.hashtag}>#Graphic_Design</Text>
          <Text style={styles.hashtag}>#Programing</Text>
          <Text style={styles.hashtag}>#Jobs</Text>
          <Text style={styles.hashtag}>#Mentorship</Text>
          <Text style={styles.hashtag}>#Need_Funding</Text>
          <Text style={styles.hashtag}>#Project_Ideas</Text>
          <Text style={styles.hashtag}>#Learn_From_Professionals</Text>

          <Text style={styles.hashtag}>#Web_design</Text>
          <Text style={styles.hashtag}>#Internships</Text>
          <Text style={styles.hashtag}>#Peogect_Managment</Text>
          <Text style={styles.hashtag}>#Online_Sources_To_Learn</Text>
          <Text style={styles.hashtag}>#Graphic_Design</Text>
          <Text style={styles.hashtag}>#Programing</Text>
          <Text style={styles.hashtag}>#Jobs</Text>
          <Text style={styles.hashtag}>#Mentorship</Text>
          <Text style={styles.hashtag}>#Need_Funding</Text>
          <Text style={styles.hashtag}>#Project_Ideas</Text>
          <Text style={styles.hashtag}>#Learn_From_Professionals</Text>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems: 'flex-start',
        
        backgroundColor: '#e3e3ff'
      },
    footer:{
      alignItems: 'center',
      alignSelf: 'center',
      flexDirection: 'row',
      height:40,
      color: '#fff',
      width: '90%',
      backgroundColor: 'transparent',
      padding:5,
      marginVertical: 10,
      marginTop: 50,
    },
    inputContainer: {
      backgroundColor: '#fff',
      color: '#fff',
      borderRadius:30,
      borderBottomWidth: 1,
      width: '80%',
      height:55,
      flexDirection: 'row',
      alignItems:'center',
      flex:1,
      marginRight:10,
    },
    inputs:{
      height:40,
      marginLeft:16,
      color: '#fff',
      borderBottomColor: '#FFFFFF',
      flex:1,
      fontWeight: '500'
    },
    hashtag: {
      marginLeft: 20,
      textDecorationLine: 'underline',
      fontStyle: 'italic',
      fontWeight: 'bold',
      color: '#465a61',
      marginBottom: 10,
      fontSize: 18
    },
    popular:{
      alignItems:"flex-start",
      marginLeft: 25,
      fontWeight: 'bold',
      fontSize: 25,
      color: '#32444a',
      fontFamily: 'sans-serif-condensed',
      marginTop: 32,
      marginBottom: 15,
      fontStyle: 'italic',
    }
})
