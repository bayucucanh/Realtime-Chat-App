import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const login = (email, pass) =>
  auth().signInWithEmailAndPassword(email, pass);

export const register = (email, pass) =>
  auth().createUserWithEmailAndPassword(email, pass);

export const forgetPassword = email => auth().sendPasswordResetEmail(email);

export const addUser = (email, username, uid) =>
  database().ref(`/users/${uid}`).set({
    id_user: uid,
    email: email,
    username: username,
  });
