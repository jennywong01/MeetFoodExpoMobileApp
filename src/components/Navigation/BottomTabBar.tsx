import { BottomTabBarProps as RNBottomTabBarProps } from '@react-navigation/bottom-tabs';
import {
	BottomNavigation,
	BottomNavigationTab,
	Icon,
} from '@ui-kitten/components';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { AppRouteName, AppHomeRouteName } from '../../constants/navigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BOTTOM_TAB_ROUTES: Array<string> = [
	AppHomeRouteName.FeedScreen,
	AppRouteName.UploadScreen,
	AppHomeRouteName.MeScreen,
];

export type BottomTabBarProps = Pick<
	RNBottomTabBarProps,
	'navigation' | 'state'
>;

export const BottomTabBar: React.FC<BottomTabBarProps> = ({
	navigation,
	state,
}) => {
	const { navigate } = navigation;
	const { index: routeIndex, routeNames } = state;
	const { bottom: SafeAreaBottom } = useSafeAreaInsets();
	const onSelect = useCallback(
		(index: number) => {
			const currentTab = BOTTOM_TAB_ROUTES[index];
			navigate(currentTab);
		},
		[navigate],
	);

	return (
		<BottomNavigation
			appearance="noIndicator"
			selectedIndex={BOTTOM_TAB_ROUTES.indexOf(routeNames[routeIndex])}
			onSelect={onSelect}
			style={{ paddingBottom: SafeAreaBottom }}
		>
			<BottomNavigationTab title="Home" />
			<BottomNavigationTab
				icon={
					<View>
						<Icon
							name="plus"
							fill="white"
							style={{
								display: 'flex',
								alignSelf: 'center',
								width: 52,
								height: 35,
								backgroundColor: '#FF5722',
								borderRadius: 10,
								overflow: 'hidden',
							}}
						/>
					</View>
				}
			/>
			<BottomNavigationTab title="Me" />
		</BottomNavigation>
	);
};
