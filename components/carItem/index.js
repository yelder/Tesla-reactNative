import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButtom from '../styledButtom/index';
import styles from './styles.js';

const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>
        <ImageBackground source={require("../../assets/images/ModelS.jpeg")}
          style={styles.image}
        />

        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69.420</Text>
        </View>

        <StyledButtom type="primary" 
        content={"Custom Order"}
        onPress={()=>{
            console.warn("Custom was pressed")
        }}
        />
        
        <StyledButtom type="secondary" 
        content={"Existing Inventory"}
        onPress={()=>{
            console.warn("Existing inventory was pressed")
        }}
        />
      </View>
    );
    
};
export default CarItem;