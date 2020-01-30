import * as React from "react";
import HomeScreen from "./HomeScreen";
import { StatusBar, ActivityIndicator, Share } from "react-native";
import { observer, inject } from "mobx-react";
import { NavigationStackProp } from "react-navigation-stack";
import SplashScreen from 'react-native-splash-screen'

interface Props {
  navigation: NavigationStackProp
  content: any;
  data: any;
  Detail: any
  onPress: (item: any) => void
  category: any
  ads: any;
  bookmark: any
  messaging: any
  loading: boolean;

}

interface State {
  key: string
  bookmark: Boolean
  selectedItem: any

}

@inject('content', 'category', 'ads', 'bookmark', 'messaging')
@observer
export default class HomeContainer extends React.Component<Props, State> {
  onEndReachedCalledDuringMomentum: boolean;

  constructor(props: Props) {
    super(props);
    this.state = {
      key: "",
      bookmark: false,
      selectedItem: null,
    };
    this.onEndReachedCalledDuringMomentum = true

  }
  onStartReached = () => {
    this.onEndReachedCalledDuringMomentum = false
  }

  onEndReached = () => {
    this.props.content.fetchMoreContent(this.state.key);
  }

  async componentDidMount() {
    SplashScreen.hide();
    await this.props.messaging.setUserToken();
    await this.props.messaging.checkPermission();
    await this.props.messaging.initialNotification();
  
    this.props.content.fetchContent()
    StatusBar.setBarStyle("dark-content");
    this.props.category.fetchCategory();
    this.props.ads.fetchAds();
    this.props.content.updateTopView();
  }


  _onMore = async () => {

    await this.props.content.fetchMoreContent()
  }

  _onRefresh = async () => {
    await this.props.content.fetchRefreshContent(this.state.key);
  };
  // _onEnd =

  _onContent = (item: any) => {
    this.props.content.fetchDetail(item)
    this.props.navigation.navigate('Detail')
  }
  _changeTab = (ref: any) => {



    const key: string = ref.ref.key
    const newKey = key.replace('.$', '')
    this.setState({ key: newKey })
    this.props.content.fetchContent(newKey)
    console.log('newkey :', newKey);

  }
  _onModal = (item: any) => {
    // console.log("item",item)

    this.setState({ selectedItem: item })
    this.props.bookmark.fetchSave(item.key)
  }
  _onSave = async () => {
    const item = this.state.selectedItem
    this.props.content.fetchDetail(item)
    const { selectedDetail } = this.props.content;
    await this.props.bookmark.addFavorite(selectedDetail);
    await this.props.bookmark.fetchFavorite();

  };
  _onUnSave = async () => {
    const item = this.state.selectedItem
    const { selectedDetail } = this.props.content;
    await this.props.bookmark.deleteFavorite(item.key);
    await this.props.bookmark.fetchFavorite();
  };
  _onShare = async () => {
    // const key = this.props.content.dataSelected.key;
    const key = this.state.selectedItem.key
    try {
      const result = await Share.share({
          message: `https://familynews5.firebaseapp.com/article/${key}`
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log("object", error);
    }
  };

  render() {
    const { dataContent, loading, loadingMore, } = this.props.content
    const { category } = this.props.category;
    const hotNews = {
      name:  'ព័ត៌មានផ្សេងៗ',
      key: ''
    }
    const newcategories = category ? [hotNews, ...category] : [hotNews];
    const { adsDoc } = this.props.ads
    const { saveData } = this.props.bookmark


    return (
      <HomeScreen
        adsDoc={adsDoc}
        Content={dataContent}
        onPress={this._onContent}
        category={newcategories}
        changeTab={this._changeTab}
        loading={loading}
        onSave={this._onSave}
        onUnSave={this._onUnSave}
        onModal={this._onModal}
        saveData={saveData}
        loadingMore={loadingMore}
        onEndReached={this.onEndReached}
        onStartReached={this.onStartReached}
        onMore={this._onMore}
        onRefresh={this._onRefresh}
        onShare={this._onShare}
      />
    );

  }
}

