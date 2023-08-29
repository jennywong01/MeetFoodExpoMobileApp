import React from 'react';
import { View } from 'react-native';

export interface PlaceholderProps {
	children?: React.ReactNode;
}

export const Placeholder: React.FC<PlaceholderProps> = ({ children }) => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			{children}
		</View>
	);
};

export default Placeholder;
