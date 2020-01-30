import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import modules from "../modules";
import Icon from "react-native-vector-icons/Feather";
import { FontGSansBold } from "../../function/customFont";
interface Props {
  iconLeft?: any;
  iconRight?: any;
  title?: any;
  onClickIconLeft?: any;
  onClickIconRight?: any;
  onSave: any
  onDelete:any


}
interface State { }

export default ({
  iconLeft,
  iconRight,
  title,
  onSave,
  onClickIconLeft,
  onClickIconRight,
  onDelete
}: Props) => {
  return (
    <View style={styles.container}>

      {iconLeft ? (
        <TouchableOpacity onPress={onClickIconLeft}>
          <Icon style={[styles.Icon, { marginLeft: 0 }]} name={iconLeft} />
        </TouchableOpacity>
      ) : (
          <View />
        )}


      {title ? <Text style={styles.title}>{title}</Text> : <View />}

      {iconRight ? (

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          
          <TouchableOpacity onPress={onSave} >
            <Icon style={[styles.Icon, { padding: 0 }]} name={'bookmark'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onClickIconRight}>
            <Icon style={styles.Icon} name={iconRight} />
          </TouchableOpacity>
        </View>
      ) : (
          <View />
        )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
    backgroundColor: '#000',
    paddingVertical: modules.SPACE,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
    // flex:1
  },
  imgLogo: {
    width: 60,
    height: 50
  },
  Icon: {
    fontSize: 23,
    color: modules.WHITE,
    padding: modules.SPACE,
    marginLeft: 18
  },
  title: {
    fontSize: modules.FONT_H3,
    color: modules.WHITE,

  },
  
});
