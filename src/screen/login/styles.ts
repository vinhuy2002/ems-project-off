import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: 24,
            // backgroundColor: '#FCFCFC',
            height: '100%',
            justifyContent: 'center',
        },
        box: {
            // borderWidth: 1,
            borderRadius: 5,
            width: '100%',
            // borderColor: '#d5bdaf',
            backgroundColor: '#224957',
            paddingLeft: 10,
        },
        button: {
            padding: 10,
            backgroundColor: '#43A047',
            alignItems: 'center',
            width: '30%',
            borderRadius: 5,
            marginTop: 20
        },
        textCenter: {
            textAlign: 'center'
        },
        padTop: {
            paddingTop: 30,
        },
        bottom: {
            flex: 1,
            justifyContent: 'flex-end',
        },
        textBtn: {
            color: 'white',
            fontFamily: 'Inter-Medium',
            fontSize: 16,
        },
        text: {
            fontFamily: 'Inter-Medium',
            fontSize: 18,
            color: '#ffffff'
        },
    }
);

export default styles;