import * as React from "react";
import { View,  } from "react-native";

import { Placeholder, Fade, PlaceholderMedia, PlaceholderLine } from "rn-placeholder";
interface Props {
  
}
export default ({  }: Props) => {
  return (
    <View>
    <Placeholder
      Animation={Fade}

    >
      <PlaceholderLine height={150} noMargin style={{ marginBottom: 15 }} />
      <View style={{ paddingHorizontal: 12 }}>
        <PlaceholderLine width={40} />

        <PlaceholderLine />

      </View>
    </Placeholder>
    <Placeholder
      Animation={Fade}
      style={{marginTop:12}}

    >
      <PlaceholderLine height={150} noMargin style={{ marginBottom: 15 }} />
      <View style={{ paddingHorizontal: 12 }}>
        <PlaceholderLine width={40} />

        <PlaceholderLine />

      </View>
    </Placeholder>
    <Placeholder
      Animation={Fade}
      style={{marginTop:12}}

    >
      <PlaceholderLine height={150} noMargin style={{ marginBottom: 15 }} />
      <View style={{ paddingHorizontal: 12 }}>
        <PlaceholderLine width={40} />

        <PlaceholderLine />

      </View>
    </Placeholder>
  </View>
      
    
  );
};


