import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Text, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./PostList.styles";
import {IMAGE} from '../Constants/Images'

export function PostList(props) {
  const { registers } = props;
  const navigation = useNavigation();

  const goToPost = (item) => {          
        navigation.navigate("Post", {
          postId: item.id,
          setReloadData: true,
        })
      
  };
 

    const renderItem = ({item}) => {
        let items = [];
        if( item.newRow) {
          items = item.newRow.map(row => {
            return <Text>{row.text}</Text>
          })
        } 
  
        return (
          <View>
           <TouchableOpacity onPress={() => goToPost(item)}>
            <View style={styles.container}>
              <Image
                source={IMAGE.ICON_POST}
                style={styles.image}
              />

              <View>
                <Text style={styles.name}>{item.title}</Text>
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
      data={registers}
      keyExtractor={r => r.id.toString()}
      renderItem={renderItem }
    
    />
    </View>
  );
}
