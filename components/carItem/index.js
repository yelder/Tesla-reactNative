import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButtom from '../StyledButtom/index';
import styles from './styles.js';

const CarItem = (props) => {

    const{name, tagLine, tagLineCTA,image}=props.car;
    return (
        <View style={styles.carContainer}>
        <ImageBackground source={image}
          style={styles.image}
        />

        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
              {tagLine}
              {' '}
          <Text style={styles.subtitleCTA}>{tagLineCTA}</Text>
          </Text>
        </View>

        <View style={styles.buttonContainer}>
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
      </View>
    );
    
};
export default CarItem;