import React from 'react';
import { Text, StyleSheet } from 'react-native';

const MainText = (props: any) => (
	<Text
		{...props}
		style={[styles.text, props.style]}>{props.children}</Text>
);

const styles = StyleSheet.create({
	text: {
		fontSize: 15,
		backgroundColor: "transparent"
	}
});

export default MainText;