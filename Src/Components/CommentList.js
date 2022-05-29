import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Text, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./CommentList.styles";

export function CommentList(props) {
  const { post } = props;
  const navigation = useNavigation();
  
 

    const renderItem = ({item}) => {
        let items = [];
        if( item.newRow) {
          items = item.newRow.map(row => {
            return <Text>{row.text}</Text>
          })
        } 
  
        return (
          <View >
           <TouchableOpacity>
            <View style={styles.container}>
              <View>
                <Text style={styles.name}>Nombre: {item.name}</Text>  
                <Text style={styles.name}>Correo: {item.email}</Text>
                <Text style={styles.name}>Comentario:</Text>
                <Text style={styles.info}>{item.body}</Text>                               
              </View>
            </View>
          </TouchableOpacity>
          </View>
        )
      }
  return (
      <View>        
        <FlatList
          data={post.comments}
          keyExtractor={r => r.id.toString()}
          renderItem={renderItem }
        />    
    </View>
  );
}
 

