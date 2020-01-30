import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity,Share, StatusBar } from "react-native";
import Modal from 'react-native-modal';
import modules from "../../modules";
import { SafeAreaView, ScrollView } from "react-navigation";
import FastImage from "react-native-fast-image";
// import More from 'react-native-vector-icons/Entypo';
import More from 'react-native-vector-icons/MaterialIcons';

import HeaderDetail from "../../components/HeaderDetail";
import DetailWebView from "../../components/DetailWebView";
import { Battambang, BattambangBold } from "../../../function/customFont";
import { _formatDateTime } from "../../services/datetime.service";
import Icons from 'react-native-vector-icons/Ionicons'
// import Icon from "react-native-vector-icons/Entypo";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { useState } from "react";




interface Props {
  onClickBack: () => void;
  selectedContent: any;
  onSave: any
  onUnSave: any
  saveData: boolean;
  onShare: any
  // onModal: (item: any) => void
  onPress?: (item: any) => void
}

interface State { }
export default ({ onClickBack, selectedContent, saveData, onUnSave, onSave,onPress,onShare }: Props) => {
  const [visable, setVisable] = useState(false);

  return (
    <View style={styles.container}>
      <SafeAreaView/>
      <StatusBar barStyle={'dark-content'}/>

      
      <View style={styles.headerDetail}>
        <TouchableOpacity onPress={onClickBack}>
          <Icons style={styles.arrow} name='ios-arrow-back' />
        </TouchableOpacity>
        {/* <View style={styles.headerDetail}>
          {
            saveData ?
              <TouchableOpacity onPress={() => setVisable(!visable)}>
                <More name="bookmark" style={[styles.More_Icon, { marginHorizontal: 18 }]} />
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => setVisable(!visable)}>
                <More name="bookmark" style={[styles.More_Icon, { marginHorizontal: 18 }]} />
              </TouchableOpacity>
          }
          <TouchableOpacity>
          <More name="share" style={styles.More_Icon} />
          </TouchableOpacity>

        </View> */}
        <View style={styles.TouchableOpacity}>
                        {
                            saveData ?
                                <TouchableOpacity onPress={() => onUnSave()}>
                                    <More name="bookmark" style={[styles.More_Icon, { marginHorizontal: 18 }]} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => onSave()}>
                                    <More name="bookmark-border" style={[styles.More_Icon, { marginHorizontal: 18 }]} />
                                </TouchableOpacity>
                        }
                        <TouchableOpacity onPress={() => { onShare() }}>
                            <More name="share" style={styles.More_Icon} />
                        </TouchableOpacity>

                    </View>

      </View>

      <ScrollView style={styles.content}
        showsVerticalScrollIndicator={false}
      >

        {/* <Modal
          animationIn="fadeInUp"
          animationOut="fadeOutDown"
          style={styles.modalContainer}
          onBackdropPress={() => setVisable(!visable)}
          isVisible={visable}
        >
          <View style={styles.modal}>
            <View style={styles.center}>
              <View style={styles.bodysave}>

              </View>
            </View>
            <View style={styles.savestyles}>
              {
                saveData ?
                  <TouchableOpacity style={styles.body} onPress={() => { onUnSave(), setVisable(!visable) }}>
                    <Icon style={styles.icon} name='bookmark' />
                    <View >
                      <Text style={styles.text}>
                        Unsave post
                             </Text>
                      <Text style={styles.Desc} >
                        Remove this content to your bookmarks.
                            </Text>
                    </View>

                  </TouchableOpacity>
                  :
                  <TouchableOpacity style={styles.body} onPress={() => { onSave(), setVisable(!visable) }}>
                    <Icon style={styles.icon} name='bookmark-outline' />
                    <View >
                      <Text style={styles.text1}>
                        Save post
                             </Text>
                      <Text style={styles.Desc} >
                        Add this content to your bookmarks.
                            </Text>
                    </View>

                  </TouchableOpacity>
              }


              <TouchableOpacity style={[styles.body, { borderBottomColor: '#fff' }]} onPress={() => { onShare() }}>
                <Icon style={styles.icon} name='share-variant' />
                <View>
                  <Text style={styles.text1}>
                    Share this conten to social network
                   </Text>

                </View>
              </TouchableOpacity>
            </View>
          </View>

        </Modal> */}
        <FastImage
          resizeMode={FastImage.resizeMode.cover}
          style={styles.ImgCover}
          // source={{
          //   uri: String(selectedContent.fileurl)

          // }}
          source={selectedContent.fileurl? { uri: String(selectedContent.fileurl) }: {uri:'https://youngfreeflorida.com/wp-content/uploads/2019/06/Marketplace-Lending-News.jpg'}}

        />
      {/* <FastImage style={styles.Image} source={data.fileurl? { uri: String(data.fileurl) }: {uri:'https://youngfreeflorida.com/wp-content/uploads/2019/06/Marketplace-Lending-News.jpg'}} /> */}

        <View style={styles.TextArea}>
          <Text style={styles.text}>
            {selectedContent.name}
          </Text>
          {/* <Text style={styles.Writer}>អត្ថបទដោយ ៖ {selectedContent.create_by.name}</Text> */}
          <Text style={styles.Date}>{selectedContent.create_date
            ? _formatDateTime(selectedContent.create_date.seconds)
            : ""}</Text>

        </View>
        <View style={styles.WebView}>

          <DetailWebView html={selectedContent.editname} />
        </View>
      </ScrollView>



    </View>
  );
};
const styles = StyleSheet.create({
  TouchableOpacity: {
    flexDirection: 'row',
    padding:5
  },
  arrow: {
    fontSize: 30,
    color: '#ffffff',
    padding: 10,
  },
  WebView: {
    marginTop: 12
  },
  BorderLine: {
    borderBottomColor: "#e0e0e0",
    borderBottomWidth: 3,
    width: modules.VIEW_PORT_WIDTH / 4,
    marginTop: modules.PADDING
  },
  Date: {
    fontSize: modules.FONT_P,
    marginTop: modules.SPACE5,
    color: modules.SUB_TEXT
  },
  Writer: {
    fontSize: modules.FONT_P,
    marginTop: modules.SPACE5,
    ...Battambang
  },
  TextArea: {
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
    paddingTop: modules.PADDING,


  },
  text: {
    fontSize: modules.FONT_H5,
    color: '#000',
    ...BattambangBold,

  },
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  content: {
    flex: 1,
    backgroundColor: modules.WHITE
  },
  ImgCover: {
    width: modules.VIEW_PORT_WIDTH,
    height: modules.VIEW_PORT_HEIGHT / 3
  },
  More_Icon: {
    fontSize: 20,
    padding: 6,
    color: '#ffffff',

  },
  headerDetail: {
    flexDirection: 'row',
    paddingHorizontal:5,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: '#000',
    height: 50
  },
  modalContainer: {
    flex: 1,
    margin: 0,
    justifyContent: 'flex-end',


  },
  modal: {
    width: modules.VIEW_PORT_WIDTH,
    height: modules.VIEW_PORT_HEIGHT / 4.5,


  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  bodysave: {
    height: 5,
    width: 60,
    borderRadius: 5,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    margin: 6


  },
  savestyles: {
    flex: 1,
    backgroundColor: '#ffffff',



  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: 'rgba(0,0,0,0.1)'




  },
  icon: {
    fontSize: 30,
    margin: 16
  },

  text1: {
    color: modules.SUB_TEXT,
    fontSize: 16,


  },
  Desc: {
    fontSize: 12,
    color: modules.SUB_TEXT,

  }

});
