import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes'

export default StyleSheet.create({
    // header: {
    //   width: '100%',
    //   height: '100%',
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
    // headerText: {
    //   fontWeight: 'bold',
    //   fontSize: 20,
    //   color: '#333',
    //   letterSpacing: 1,
    // },
    icon: {
      position: 'absolute',
      left: 16
    },
    header: {
      height: 50,
      elevation: 8,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: COLORS.black,
    },
    view: {
      marginHorizontal: 16,
      alignItems: 'center',
      flexDirection: 'row',
    },
    titleView: {
      flex: 1,
    },
    rightView: {
      justifyContent: 'flex-end',
    },
    rowView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 10,
    }
  })