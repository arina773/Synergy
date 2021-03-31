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
  Button
} from 'react-native';

export default class MessageScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, date: "9:50 am", type: 'in',  message: "Բարև լույս Մարիա։ Ինչ գեղեցիկ աշխատանքներ ունեք, դուք վառ ապագա ունեք։ Դեմ չէիք լինի մի փոքր մանարասնել ջեր գործունեության մասին"},
        {id:2, date: "9:54 am", type: 'out', message: "Բարև Ձեզ Լյուսի ջան։ Մեեեծ սիրոոով։ Կուղարկեք ինձ ձեր մեյլը իմ cv ին ուղարկեմ?"} ,
        {id:3, date: "10:25 am", type: 'in',  message: "maria.hanoi21@gmail.com"}, 
        {id:4, date: "10:26 am", type: 'in',  message: "Անհամբեր սպասում եմ"}, 
        {id:5, date: "10:26 am", type: 'out',  message: "ուղարկեցի"}, 
        {id:6, date: "10:26 am", type: 'in',  message: "Ես Ջեզ համար գործնական առաջարկ ունեմ ։ Ահա իմ համարը կապնվեք ինձ հետ"}, 
        {id:7, date: "10:26 am", type: 'in',  message: "+37499354494"},
      ]
    };
  }

  renderDate = (date) => {
    return(
      <Text style={styles.time}>
        {date}
      </Text>
    );
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.header}>
         <Text style={styles.headerTitle}>
            Maria
         </Text>
       </View>
        <FlatList style={styles.list}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={(message) => {
            console.log(item);
            const item = message.item;
            let inMessage = item.type === 'in';
            let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
            return (
              <View style={[styles.item, itemStyle]}>
                {!inMessage && this.renderDate(item.date)}
                <View style={[styles.balloon]}>
                  <Text>{item.message}</Text>
                </View>
                {inMessage && this.renderDate(item.date)}
              </View>
            )
          }}/>
        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Write a message..."
                underlineColorAndroid='transparent'
                onChangeText={(name_address) => this.setState({name_address})}/>
          </View>

            <TouchableOpacity style={styles.btnSend}>
              <Image source={{uri:"https://img.icons8.com/small/75/ffffff/filled-sent.png"}} style={styles.iconSend}  />
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#e3e3ff'
  },
  header:{
    paddingTop:24,
    paddingBottom:16,
    backgroundColor:'#e3e3ff',
    alignItems:'center',
    borderBottomWidth:1,
    justifyContent:'center',
    borderBottomColor:'#EBECF4',
    shadowColor:'#454D65',
    shadowOffset:{height:5},
    shadowRadius:15,
    shadowOpacity:0.2,
    zIndex:10
  },
  headerTitle:{
    fontSize:20,
    fontWeight:'500'
  },
  list:{
    paddingHorizontal: 17,
  },
  footer:{
    flexDirection: 'row',
    height:60,
    backgroundColor: '#eeeeee',
    paddingHorizontal:10,
    padding:5,
  },
  btnSend:{
    backgroundColor:"#7d7dad",
    width:45,
    height:45,
    borderRadius:360,
    alignItems:'center',
    justifyContent:'center',
  },
  iconSend:{
    width:30,
    height:30,
    alignSelf:'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    height:40,
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    marginRight:10,
  },
  inputs:{
    height:40,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
  },
  itemIn: {
    alignSelf: 'flex-start',
    backgroundColor:"#7d7dad",
  },
  itemOut: {
    alignSelf: 'flex-end',
    backgroundColor:"#a5a5f0",
  },
  time: {
    alignSelf: 'flex-end',
    margin: 15,
    fontSize:12,
    color:"#000000",
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
    
    borderRadius:300,
    padding:5,
  },
}); 
                                            