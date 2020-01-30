import * as React from "react";
import { View, StyleSheet, Text, ActivityIndicator, Alert, StatusBar } from "react-native";
import modules from "../../modules";
import { SafeAreaView, FlatList } from "react-navigation";
import FastImage from "react-native-fast-image";
import HeaderTabs from "../../components/HeaderTabs";
import BookmarkCard from "../../components/BookmarkCard";
import HeaderDetail from "../../components/HeaderDetail";
// import { fontGSans } from "../../../functions/customFont";

interface Props {
  data: any,
  progress: boolean,
  onDetail: (item: any) => void
  onDelete: () => void
}

export default ({ data, progress, onDetail, onDelete }: Props) => {

  return (
    <View style={styles.container}>
       <StatusBar barStyle={'dark-content'}/>

      <HeaderTabs  onDelete={
    
        !data || data.length == 0 ?
          null
          :
          () => {
            Alert.alert(
              'Remove all',
              'Are you sure for remove all contents?',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                { text: 'OK', onPress: () => { onDelete() } },
              ],
              { cancelable: false },
            );


          }} />
      {
        progress ?
          <ActivityIndicator />
          :
          !data || data.length == 0 ?
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#fff' }}>

              <FastImage
                resizeMode={FastImage.resizeMode.contain}
                style={styles.ImgSearch}
                source={require('../../image/save.png')}
              />
              <Text style={styles.text}>All of your save will show in here.
        </Text>
              <Text style={styles.text}>Thank you for for using our APP!
        </Text>
            </View>

            :
            <View style={styles.content}>
              <FlatList
                data={data}
                renderItem={(item: any) => {
                  const data = JSON.parse(item.item.data)
                  // console.log(data)
                  return (
                    <BookmarkCard data={data} onClick={() => onDetail(data)} />
                  )


                }}
              />

            </View>
      }

    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: modules.FONT_H5,

    color: modules.SUB_TEXT

  },
  container: {
    flex: 1,
    backgroundColor: '#000',

  },
  content: {
    flex: 1,
    backgroundColor: modules.WHITE,
    paddingHorizontal:12,
    
  },
  ImgSearch: {
    width: modules.VIEW_PORT_WIDTH / 1.5,
    height: modules.VIEW_PORT_HEIGHT / 3.5
  }
});
