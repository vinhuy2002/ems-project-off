import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    directionRow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    smallDirRow:{
        flexDirection: 'row',
        width: '50%',
    },
    directionCol: {
        flexDirection: 'column',
    },
    itemCenter: {
        alignItems: 'center',
    },
    largeImg: {
        width: 50,
        height: 50
    },
    smallImg: {
        width: 20,
        height: 20
    },
    text: {
        fontFamily: 'Inter-Medium',
        fontSize: 16,
        color: '#000000',
    },
    padLeft: {
        paddingLeft: 2,
    },
    centerRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    first: {
        justifyContent: 'center', paddingRight: 20
    },
    col: {
        flexDirection: 'column', width: '50%', justifyContent: 'center', alignItems: 'center'
    },
    divider: {
        width: '100%',
    },
    borderStyle: {
        borderWidth: 1,
        borderColor: '#d5bdaf',
        padding: 5,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5
    },
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text1: { textAlign: 'center' }
});

export default styles;