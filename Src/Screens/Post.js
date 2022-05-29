import React, { useState, useEffect, useRef, useCallback }from 'react'
import { View, Text,StyleSheet,ActivityIndicator } from 'react-native'
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import postDB from '../Api/ApiConnect';
import {CommentList} from '../Components/CommentList';


export default function Post(props) {
  const [isLoading, setisLoading] = useState(true);
    const [post, setPost] = useState();    
    const { postId } = props.route.params;        
    const navigation = useNavigation();

    useEffect(() => {
      const getQry = async () =>{    
        const result = await  postDB.get('/api/Post/'+ postId);          
        setPost(result.data);
        setisLoading(false);
      }
      getQry();
    }, [])

    if ( isLoading ) {
      return (
          <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
              <ActivityIndicator color="red" size={ 100 } />
          </View>
      )
  }
  
  return (
    
    <View style={styles.MainContainer}>
      <Text style={styles.name}>{post.title}</Text>        
      <Text style={styles.name}>{post.body}</Text>
      <Text style={styles.name}></Text>
      <Text style={styles.name}>Lista de Comentarios:</Text>
      <Icon
        reverse
        type="material-community"
        name="plus"
        color="#6a51ae"
        containerStyle={styles.btnContainer}
        onPress={() =>          
          navigation.push("CommentAdd", { postId })
        }
      />
      <View>
      <CommentList   post={post} />
      </View>
      
      
    </View>
    
  )
}

const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      top: 50,
      marginRight:20,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5F5F5",
    },
    btnContainer: {
      position: "absolute",
      width: 70,
      height: 70,
      bottom: 70,
      right: 10,
      shadowColor: "black",
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.5,
    },
    info: {
      color: "#828282",       
      marginTop: 5,
      right: 10,
      left:10,
    },
    name: {
      color: "#000", 
      fontSize: 15, 
      fontWeight: "bold" ,
      right: 10,
      left:10,
  },
  });
  