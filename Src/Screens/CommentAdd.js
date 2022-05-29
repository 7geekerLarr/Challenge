import React, { Component } from 'react';

import { StyleSheet, Text, TextInput, Alert, Button, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Formik } from 'formik'
import * as yup from 'yup'
import postDB from '../Api/ApiConnect';


export default function Comment_Add(props) {
  const { postId } = props.route.params;
  const navigation = useNavigation();
    const customCss = {
      borderWidth: 1,
      padding: 10,
      marginBottom: 12,
      borderColor: '#cccccc',
    };

    const postQry = async (values) =>{        
      var params = {
        name: values.name,     
        email: values.email,  
        body: values.body,  
        postId: postId,  
      };
      const rutaHttp = 'api/Post/Comment';        
      const result = await  postDB.post(rutaHttp , params)
      .then((result) => {        
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.log(error);
      });           
      
    }

    return (
      <Formik
        initialValues={{ 
          name: '',
          email: '', 
          body: '',         
        }}                
        validationSchema={yup.object().shape({
          name: yup
            .string()
            .required('El Nombre es requerido.'),
          email: yup
            .string()
            .email("Debe colocar un email valido")
            .required('El correo es requerido.'),
          body: yup
            .string()            
            .required('El comentario es requerido.'),
        })}
        onSubmit={values => postQry(values)}
       >
        {({ values, errors, setFieldTouched, touched, handleChange, isValid, handleSubmit }) => (
          <View style={styles.mainWrapper}>            
            <TextInput
              value={values.name}
              style={customCss}
              onBlur={() => setFieldTouched('name')}
              onChangeText={handleChange('name')}
              placeholder="Name"
            />
            {touched.name && errors.name &&
              <Text style={{ fontSize: 11, color: 'red' }}>{errors.name}</Text>
            }            
            <TextInput
              value={values.email}
              style={customCss}
              onBlur={() => setFieldTouched('email')}
              onChangeText={handleChange('email')}
              placeholder="E-mail"
            />
            {touched.email && errors.email &&
              <Text style={{ fontSize: 11, color: 'red' }}>{errors.email}</Text>
            }
            <TextInput
              value={values.body}
              style={customCss}
              placeholder="Comentario"
              onBlur={() => setFieldTouched('body')}
              onChangeText={handleChange('body')}
            />
            {touched.body && errors.body &&
              <Text style={{ fontSize: 11, color: 'red' }}>{errors.body}</Text>
            }                                   
            <Button
              color="blue"
              title='Agregar'
              disabled={!isValid}
              onPress={handleSubmit}
            />
          </View>
        )}        
      </Formik>
    );
  }



const styles = StyleSheet.create({
  mainWrapper: {
    padding: 40 
  }
});