import 'react-native-gesture-handler'
/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { setCustomText } from 'react-native-global-props';
import modules from './app/modules';
import { fontNormal } from './function/customFont';

const customTextProps = {
	style: {
		color: modules.TEXT,
		// fontSize: modules.FONT,
		// ...fontNormal,
	}
};
setCustomText(customTextProps);
AppRegistry.registerComponent(appName, () => App);
