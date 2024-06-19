import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const FovoritesScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						headerTitle: 'Favorites',
					}}
				/>
			</Stack>
		</View>
	)
}

export default FovoritesScreenLayout

// const styles = StyleSheet.create({})
