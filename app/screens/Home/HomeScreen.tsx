import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,

  TouchableOpacity,
  StatusBar

} from "react-native";
import _styles from "../../_styles";
import modules from "../../modules";
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import CardNews from "../../components/CardNews";
import HeaderTabs from "../../components/HeaderTabs";
import { BattambangBold } from "../../../function/customFont";
import { addAdsInArray } from "../../services/mapping.service";
import AdsCard from "../../components/AdsCard";
import Modal from 'react-native-modal';
import { useState } from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Placeholder from "../../components/Placeholder";
import { url } from "inspector";
import { FlatList } from 'react-navigation'
interface Props {
  // Detail?: any;

  data?: Array<any>;
  Content?: any;
  onContent?: any;
  onPress: (item: any) => void
  category?: any
  changeTab?: any
  adsDoc: any;
  onSave?: any
  onUnSave: () => void
  onModal: (item: any) => void
  saveData: boolean
  onShare: any
  loading: any
  loadingMore: boolean
  onEndReached: any
  onStartReached: any
  onRefresh: () => void
  onMore: () => void

}

export default ({ onEndReached, loadingMore, loading, onRefresh, onUnSave, onSave, Content, onModal, onPress, category, changeTab, adsDoc, saveData, onShare }: Props) => {
  const dataContent: any = addAdsInArray(Content, adsDoc, 2);
  // console.log('Content :', Content);
  const [visable, setVisable] = useState(false);

  return (
    <View style={[_styles.flx1, styles.MainContainer]}>
       
       <StatusBar barStyle={'dark-content'} backgroundColor="#000"/>
      <HeaderTabs onDelete='' />
         <ScrollableTabView
        initialPage={0}
        tabBarInactiveTextColor={'black'}
        tabBarActiveTextColor={'red'}
        tabBarTextStyle={styles.ScrollableTab}
        onChangeTab={changeTab}
        tabBarUnderlineStyle={styles.underlineStyle}
        renderTabBar={() => 
        
        <ScrollableTabBar style={{ borderBottomWidth: 0, }} />}
      >
        {
          category.map((m: any, index: any) => {
            return (
              <View style={styles.view} key={m.key} tabLabel={m.name} >

                <Modal
                  animationIn="fadeInUp"
                  animationOut="fadeOutDown"
                  style={styles.modalContainer}
                  onBackdropPress={() => setVisable(!visable)}
                  isVisible={visable}
                >
                  <View style={styles.content}>
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
                              <Text style={styles.text}>
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
                          <Text style={styles.text}>
                            Share this conten to social network
                               </Text>

                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>

                </Modal>
                {loading ? <Placeholder /> :
                  <FlatList
                    data={dataContent}
                    showsVerticalScrollIndicator={false}
                    onRefresh={onRefresh}
                    refreshing={loadingMore}
                    onEndReached={onEndReached}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={renderFooter(loadingMore)}
                    keyExtractor={(i, index) => index.toString()}
                    renderItem={({ item }: any) => {
                      const { isAdd } = item;
                      if (isAdd) {
                        return (

                          <AdsCard fileurl={item.fileurl} />

                        );
                      } else {
                        return (
                          <CardNews
                            key={item.key}
                            data={item}
                            onPress={() => onPress(item)}

                            onSave={() => {
                              onModal(item)
                              setVisable(!visable)
                            }}
                          />
                        );
                      }
                    }}
                  />
                }

              </View>
            )
          })
        }
      </ScrollableTabView>
    </View>

  );
};
const renderFooter = (loadingMore: boolean) => {
  if (loadingMore) return <ActivityIndicator color={'black'} size={'large'} />
  return <View style={{ height: 80 }} />
}
const styles = StyleSheet.create({




  view: {
    // fontSize: 15,
    // marginTop: modules.PADDING ,
    backgroundColor: modules.fds_blue_05

  },
  Scrolrable: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: modules.fds_blue_05
  },
  MainContainer: {
    // backgroundColor: '#000'

  },
  tabView: {
    backgroundColor: "rgba(0,0,0,0.01)"
  },


  underlineStyle: {
    height: 3,
    backgroundColor: 'red',
    marginTop: modules.SPACE,
    marginBottom: modules.BIG_SPACE,

  },

  ScrollableTab: {
    fontSize: modules.FONT,
    marginTop: modules.SPACE,
    marginBottom: modules.BIG_SPACE,
    ...BattambangBold


  },
  modalContainer: {
    flex: 1,
    margin: 0,
    justifyContent: 'flex-end',


  },
  content: {
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
  text: {
    color: modules.SUB_TEXT,
    fontSize: 16,


  },
  Desc: {
    fontSize: 12,
    color: modules.SUB_TEXT,

  }
});
