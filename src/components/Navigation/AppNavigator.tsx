import React from 'react';
import {
	createStackNavigator,
	TransitionPresets,
} from '@react-navigation/stack';
import { NavigatorScreenParams } from '@react-navigation/native';
import { AppRouteName, AppHomeRouteName } from '../../constants/navigation';
import { Upload } from '../../screens/Upload';
import {
	AppHomeNavigatorParamList,
	AppHomeNavigator,
} from './AppHomeNavigator';

export type AppNavigatorParamList = {
	[AppRouteName.HomeNavigator]: NavigatorScreenParams<AppHomeNavigatorParamList>;
	[AppRouteName.UploadScreen]: undefined;
};

const { Navigator, Screen } = createStackNavigator<AppNavigatorParamList>();

export const AppNavigator: React.FC = () => {
	return (
		<Navigator
			initialRouteName={AppRouteName.HomeNavigator}
			screenOptions={{ headerShown: false }}
		>
			<Screen name={AppRouteName.HomeNavigator} component={AppHomeNavigator} />
			<Screen
				name={AppRouteName.UploadScreen}
				component={Upload}
				options={TransitionPresets.ModalSlideFromBottomIOS}
			/>
		</Navigator>
	);
};

export default AppNavigator;
