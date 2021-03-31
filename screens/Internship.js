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
  OpaqueColorValue,
  LayoutAnimation
} from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import NotificationScreen from './NotificationScreen';


export default class Internship extends Component {


    state = {
        user: {
          name: '',
          email: '',
          password: '',
          avatar: null,
        },
        errorMessage: null
      };
    

    render() {
      return (
        <View style={styles.container}>
            <AntDesign name="arrowleft" size={24} color="black" style={styles.back}/>
            <Text style={styles.popular}>#Internship</Text>
            <View style={styles.feedItem}>
                <Image source={require('../assets/images/business-woman.jpg')} style={styles.avatar}/>
                <View style={{flex:1}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View>
                            <Text style={styles.name}>Ashxen</Text>
                            <Text style={styles.timestamp}>15։13</Text>
                        </View>
                        <Ionicons name='ios-more' size={24} color='#73788B'/>
                    </View>
                    <Text style={styles.post}>#Internship. Հրաշալի հնարավորություն նրանց համար ովքեր զբաղվում են ծրագրավորմամբ, սակայն չունեն փորձ աշխատանքային շուկայում փորձ չունենալու պատճառով։ Internshipը տևելու է 2 ամիս և արդյունքում ընտրվելու են 10 կանայք ովքեր միանգամից կանցնե աշխատանքի մեր թմում, իսկ մնացած բոլորին կտրվի հավաստագրեր մասնակցության։ Շտապեք դիմել քանի որ տեղեռն խիս սահմանափձակ են  </Text>
                    
                    <View style={{flexDirection:'row'}}>
                        <Ionicons
                        name='ios-chatboxes'
                        size={24}
                        color="#73788B"/>
                    </View>
                </View>
            </View>

            <View style={styles.feedItem}>
                <Image source={require('../assets/images/Ani.jpg')} style={styles.avatar}/>
                <View style={{flex:1}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View>
                            <Text style={styles.name}>Ani</Text>
                            <Text style={styles.timestamp}>19։13</Text>
                        </View>
                        <Ionicons name='ios-more' size={24} color='#73788B'/>
                    </View>
                    <Text style={styles.post}>#Internship. Բարև բոլորին փնտրում եմ Internshipեր։ Խնդրում եմ ինչ-որ յուղղորդի ինչպես գտնեմ զբաղվում եմ web-desgnոբ։ Նախօրոք շաաա մերսիներրրրր~~  </Text>
                    
                    <View style={{flexDirection:'row'}}>
                        <Ionicons
                        name='ios-chatboxes'
                        size={24}
                        color="#73788B"/>
                    </View>
                </View>
            </View>

            <View style={styles.feedItem}>
                <Image source={require('../assets/images/Astghik.jpg')} style={styles.avatar}/>
                <View style={{flex:1}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View>
                            <Text style={styles.name}>Asthgik</Text>
                            <Text style={styles.timestamp}>23։13</Text>
                        </View>
                        <Ionicons name='ios-more' size={35} color='#73788B'/>
                    </View>
                    <Text style={styles.post}>#Internship. Ինչ-որ մեկը կհուշի ինչպես internshipի անցնեմ օնլայն ռեժիմովվ</Text>
                    
                    <View style={{flexDirection:'row'}}>
                        <Ionicons
                        name='ios-chatboxes'
                        size={24}
                        color="#73788B"/>
                    </View>
                </View>
            </View>

            <View style={styles.feedItem}>
                <Image source={require('../assets/images/Hasmik.jpg')} style={styles.avatar}/>
                <View style={{flex:1}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View>
                            <Text style={styles.name}>Hasmik</Text>
                            <Text style={styles.timestamp}>23։13</Text>
                        </View>
                        <Ionicons name='ios-more' size={24} color='#73788B'/>
                    </View>
                    <Text style={styles.post}>#Internship. Ով կասի internshipի լավ ու վատ(եթե կան ։ճճճճճ) կողմերը</Text>
                    
                    <View style={{flexDirection:'row'}}>
                        <Ionicons
                        name='ios-chatboxes'
                        size={24}
                        color="#73788B"/>
                    </View>
                </View>
            </View>

        </View>
      );
    }
  }
  
  const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#e3e3ff'
    },
    back: {
      marginLeft: 15, 
      marginTop: 15
    },
    header:{
      paddingTop:24,
      paddingBottom:16,
      backgroundColor:'#FFF',
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
    feed:{
      marginHorizontal:16
    },
    feedItem:{
      backgroundColor:'#FFF',
      borderRadius:5,
      padding:8,
      flexDirection:'row',
      marginVertical:8
    },
    avatar:{
      width:36,
      height:36,
      borderRadius:18,
      marginRight:16
    },
    name:{
      fontSize:15,
      fontWeight:'500',
      color:'#454D65'
    },
    timestamp:{
      fontSize:11,
      color:'#C4C6CE',
      marginTop:4
    },
    post:{
      marginTop:16,
      fontSize:14,
      color:'#838899'
    },
    postImage:{
      width:undefined,
      height:150,
      borderRadius:5,
      marginVertical:16
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