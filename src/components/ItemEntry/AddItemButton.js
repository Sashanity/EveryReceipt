import React from "react";
import {
  Text,
  TouchableOpacity,
} from "react-native";
import {styles} from "../Common/styles";


export default class AddItemButton extends React.Component {

  // handlePress() {
  //   /* Had to move prop function here, it is upset */
  //   this.props
  // }

  render(){
    let { onPress } = this.props;
    return(
      <TouchableOpacity onPress={onPress}
        style={styles.btnAdd} >
        <Text style={styles.text} >{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

