import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles';
import Icon from 'react-native-ionicons'
import { Badge, Surface, Title } from 'react-native-paper'
import {COLORS} from '../../themes'

const IconSize = 24;

const AppHeader = ({ style, menu, back, logo, title, right, onRightPress, optionalBtn, optionalBtnPress, rightComponent, headerBg, iconColor, titleAlight, optionalBadge }) => {

	const LeftView = () => (
		<View style={styles.view}>
			{menu && <TouchableOpacity onPress={() => { }}>
				<Icon name="menu" size={IconSize} color={iconColor} />
			</TouchableOpacity>}
			{back && <TouchableOpacity onPress={() => { }}>
				<Icon name="arrow-back" size={IconSize} color={iconColor} />
			</TouchableOpacity>}
		</View>
	)
	
	const LogoView = () => (
			<View style={[styles.view, styles.rightView]}>
				{logo && <Text>Logo</Text>}
			</View>
	)

	const RightView = () => (
		rightComponent ? rightComponent :
			<View style={[styles.view, styles.rightView]}>
				{optionalBtn && <TouchableOpacity style={styles.rowView} onPress={optionalBtnPress}>
					<Icon name={optionalBtn} size={IconSize} color={iconColor} />
					{optionalBadge && <Badge style={{ position: 'absolute', top: -5, right: -10 }}>{optionalBadge}</Badge>}
				</TouchableOpacity>}
				{right && <TouchableOpacity onPress={onRightPress}>
					<Icon name={right} size={IconSize} color={iconColor} />
				</TouchableOpacity>}
			</View>
	)
	const TitleView = () => (
		<View style={styles.titleView}>
			<Title style={{ color: iconColor, textAlign: titleAlight }}>{title}</Title>
		</View>
	)
	return (
		<Surface style={[styles.header, style, { backgroundColor: COLORS.primary }]}>
			<LeftView />
			<LogoView />
			<TitleView />
			<RightView />
		</Surface>
	)
}

export default AppHeader