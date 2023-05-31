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
    second: {
        flexDirection: 'column', width: '80%'
    },
    divider: {
        width: '100%',
    }
});

export default styles;