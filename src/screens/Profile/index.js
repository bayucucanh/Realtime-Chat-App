import {Avatar, ListItem} from '@rneui/base';
import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS} from '../../themes';

export default function ProfileScreen() {
  const CardInfo = ({icon, bottomDivider, label, content, edit}) => {
    return (
      <ListItem bottomDivider={bottomDivider}>
        <Icon name={icon} size={20} color={COLORS.lightGray4} />
        <ListItem.Content>
          <ListItem.Subtitle style={styles.label} numberOfLines={1}>
            {label}
          </ListItem.Subtitle>
          <ListItem.Title style={styles.labelTitle}>{content}</ListItem.Title>
        </ListItem.Content>
        {edit && (
          <TouchableOpacity>
            <Icon name="create" size={20} color={COLORS.primary} />
          </TouchableOpacity>
        )}
      </ListItem>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.fotoProfile}>
        <Avatar
          size={160}
          rounded
          source={{
            uri: 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          }}
        />
        <TouchableOpacity style={styles.editAvatar}>
          <View style={styles.camera}>
            <Icon name="camera" size={20} color={COLORS.white} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.infoUser}>
        <CardInfo
          bottomDivider
          icon="person"
          label="Nama"
          content="JohnDoe"
          edit
        />
        <CardInfo
          bottomDivider
          icon="information-circle"
          label="Bio"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          edit
        />
        <CardInfo icon="mail" label="Email" content="email@email.com" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  fotoProfile: {
    marginTop: 40,
    alignSelf: 'center',
  },
  editAvatar: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginRight: 10,
  },
  camera: {
    backgroundColor: COLORS.primary,
    width: 45,
    height: 45,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoUser: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  label: {
    ...FONTS.body4,
    color: COLORS.lightGray,
  },
  labelTitle: {
    ...FONTS.h3,
  },
  labelBio: {
    ...FONTS.h3,
  },
});
