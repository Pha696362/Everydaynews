import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import modules from "../modules";
import ICon from "react-native-vector-icons/Entypo";
import Eye from "react-native-vector-icons/SimpleLineIcons";
import _styles from "../_styles";
import { Battambang } from "../../function/customFont";
import { _formatDateTime } from "../services/datetime.service";

interface Props {
  onPress: () => void
  data: any,
  onSave?:any
}

interface State {}

export default ({ data ,onPress,onSave}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.CardContainer}>
      <FastImage style={styles.Image} source={data.fileurl? { uri: String(data.fileurl) }: {uri:'https://youngfreeflorida.com/wp-content/uploads/2019/06/Marketplace-Lending-News.jpg'}} />
      
      <View style={styles.text}>
        <Text numberOfLines={2} style={styles.TitleFont}>
          {data.name}
        </Text>
      </View>
      <View style={styles.Info}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        
        <Text style={styles.fontText}>{data.create_date
                        ? _formatDateTime(data.create_date.seconds)
                        : ""}</Text>
        
        <Eye style={[{color:modules.SUB_TEXT, fontSize:16, paddingHorizontal:10}]} name='eye'/>
        <Text style={styles.fontText}>{data.top_view}</Text>
        </View>
        
        <View style={_styles.rows}>
          <TouchableOpacity >
          
          </TouchableOpacity>
          <TouchableOpacity onPress={onSave}>
            <ICon style={styles.Icon} name="dots-three-horizontal" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  Icon: {
    fontSize: 20,
    paddingLeft: 20
  },
  Info: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: modules.SPACE5,
    justifyContent: "space-between"
  },
  Admin: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: modules.SPACE5,
    justifyContent: "space-between",
    marginVertical:10
  },
  TitleFont: {
    fontSize: modules.FONT_H6,
    // color:'#CE1026',
    color:'#000',
    ...Battambang,
    
  },
  CategoryFont: {
    fontSize: modules.FONT_H6,
    color: modules.SUB_TEXT,
    marginVertical: modules.SPACE
  },
  CardContainer: {
    flex: 1,
    width: modules.VIEW_PORT_WIDTH,
    backgroundColor: modules.WHITE,
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
    marginTop: modules.PADDING / 2,
    paddingVertical:modules.BODY_HORIZONTAL_12,

  },
  Image: {
    width: "100%",
    height: modules.VIEW_PORT_HEIGHT/3.8,
    borderRadius: 12,
    overflow: "hidden",
    marginTop: modules.SPACE
  },
  text: {
    paddingVertical: modules.SPACE * 2,
    backgroundColor: modules.WHITE
  },
  fontText: {
    fontSize: modules.FONT_H5-4,
    color:modules.SUB_TITLE,


  },
  pot:{
    width:4,
    height:4,
    borderRadius:2,
    backgroundColor:modules.SUB_TEXT,
    marginHorizontal:2,
  }
});
