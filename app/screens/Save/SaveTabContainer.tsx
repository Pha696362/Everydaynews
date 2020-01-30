import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

import { inject, observer } from "mobx-react";
import SaveTabScreen from "./SaveTabScreen";

interface Props {
  bookmark: any,
  content: any,
  navigation: any
}
interface State { }
@inject('bookmark', 'content')
@observer
export default class SaveContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.bookmark.fetchFavorite()
  }
  _onCategory = (item: any) => {
    this.props.content.fetchDetail(item)
    this.props.navigation.navigate('Detail')
  }
  _onDelete = () => {
    this.props.bookmark.minusFavorite()
  }

  public render() {
    const { favoriteDoc, progress } = this.props.bookmark
    // console.log("favoriteDoc", favoriteDoc)
    return <SaveTabScreen
      data={favoriteDoc}
      progress={progress}
      onDetail={this._onCategory}
      onDelete={this._onDelete}
    />;
  }
}
