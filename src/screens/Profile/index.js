import {Avatar, ListItem, BottomSheet} from '@rneui/base';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, TouchableOpacity, View, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {CustomButton, CustomInput} from '../../components';
import {COLORS, FONTS} from '../../themes';
import {showError, showSuccess} from '../../utils';
import database from '@react-native-firebase/database';
import {setUser} from '../../store/actions';
import {getProfile} from '../../services';
import ImagePicker from 'react-native-image-crop-picker';

export default function ProfileScreen() {
  const userProfile = useSelector(state => state.UserReducer.userData);
  const [isVisible, setIsVisible] = useState(false);
  const [modalAvatar, setModalAvatar] = useState(false);
  const [image, setImage] = useState(null);
  const {control, handleSubmit, reset} = useForm({
    defaultValues: {
      name: userProfile.name,
      bio: userProfile.bio,
    },
  });

  const dispatch = useDispatch();

  const resetModal = () => {
    setIsVisible(false);
    reset();
  };

  const resetModalImage = () => {
    setModalAvatar(false);
  };

  const updateProfile = async data => {
    try {
      await database()
        .ref(`/users/${userProfile.id_user}`)
        .update({name: data.name, bio: data.bio})
        .then(ress => {
          getProfile(userProfile.email).then(async snapshot => {
            let userData = Object.values(snapshot.val())[0];
            dispatch(setUser(userData));
          });
          setIsVisible(false);
          showSuccess('Profile updated');
        });
    } catch (error) {
      showError(error);
    }
  };

  const takePhotoFromCamera = () => {
    setModalAvatar(false);
    ImagePicker.openCamera({
      width: 1200,
      height: 780,
      cropping: true,
    }).then(val => {
      console.log(val);
      const imageUri = Platform.OS === 'ios' ? val.sourceURL : val.path;
      setImage(imageUri);
    });
  };

  const choosePhotoFromLibrary = () => {
    setModalAvatar(false);
    ImagePicker.openPicker({
      width: 1200,
      height: 780,
      cropping: true,
    }).then(val => {
      console.log(val);
      const imageUri = Platform.OS === 'ios' ? val.sourceURL : val.path;
      setImage(imageUri);
    });
  };

  const CardInfo = ({icon, topDivider, label, content, edit, onPress}) => {
    return (
      <ListItem topDivider={topDivider}>
        <Icon name={icon} size={20} color={COLORS.lightGray4} />
        <ListItem.Content>
          <ListItem.Subtitle style={styles.label} numberOfLines={1}>
            {label}
          </ListItem.Subtitle>
          <ListItem.Title style={styles.labelTitle}>{content}</ListItem.Title>
        </ListItem.Content>
        {edit && (
          <TouchableOpacity onPress={onPress}>
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
            uri: userProfile.avatar,
          }}
        />
        <TouchableOpacity
          style={styles.editAvatar}
          onPress={() => setModalAvatar(true)}>
          <View style={styles.camera}>
            <Icon name="camera" size={20} color={COLORS.white} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.infoUser}>
        <CardInfo
          icon="person"
          label="Nama"
          content={userProfile.name}
          edit
          onPress={() => setIsVisible(true)}
        />
        <CardInfo
          icon="information-circle"
          label="Bio"
          content={userProfile.bio}
        />
        <CardInfo
          topDivider
          icon="mail"
          label="Email"
          content={userProfile.email}
        />
      </View>
      <BottomSheet isVisible={isVisible} onBackdropPress={resetModal}>
        <View style={styles.form}>
          <CustomInput
            testID="input-name"
            label="Nama"
            name="name"
            iconPosition="right"
            placeholder="Enter Name"
            control={control}
            rules={{
              required: 'Name is required',
            }}
          />
          <CustomInput
            testID="input-bio"
            label="Bio"
            name="bio"
            iconPosition="right"
            placeholder="Enter Bio"
            control={control}
            rules={{
              required: 'Bio is required',
            }}
          />
          <View style={styles.buttonAction}>
            <CustomButton
              style={styles.btnStyle}
              secondary
              onPress={resetModal}
              title="Cancel"
            />
            <CustomButton
              style={styles.btnStyle}
              primary
              title="Save"
              onPress={handleSubmit(updateProfile)}
            />
          </View>
        </View>
      </BottomSheet>
      <BottomSheet isVisible={modalAvatar} onBackdropPress={resetModalImage}>
        <View style={styles.form}>
          <CustomButton
            primary
            icon={<Icon name="camera" size={20} color={COLORS.white} />}
            title="Take Photo"
            onPress={takePhotoFromCamera}
          />
          <CustomButton
            secondary
            icon={<Icon name="image" size={20} color={COLORS.white} />}
            title="Choose Photo"
            onPress={choosePhotoFromLibrary}
          />
        </View>
      </BottomSheet>
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
  form: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
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
  buttonAction: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btnStyle: {
    marginLeft: 10,
    width: '20%',
  },
});
