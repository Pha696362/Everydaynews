import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import SettingTabScreen from "./SettingTabScreen";
import { inject, observer } from "mobx-react";


interface Props {
  contact: any
}
interface State { }
@inject('contact')
@observer
export default class SettingTabContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    await this.props.contact.fetchContact()
    // const { contact } = await this.props.contact;

  
  }

  public render() {
    const { contact } = this.props.contact
    
    return <SettingTabScreen
      ContactSelect={contact}

    />;
  }
}