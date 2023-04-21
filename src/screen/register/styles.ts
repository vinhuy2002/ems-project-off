import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: 24,
            backgroundColor: '#FCFCFC',
            height: '100%',
        },
        box: {
            borderWidth: 1,
            borderRadius: 5,
            width: '100%'
        },
        button: {
            padding: 10,
            backgroundColor: '#43A047',
            alignItems: 'center',
            width: '30%',
            borderRadius: 5,
        },
        alignItems: {
            alignItems: "center",
        },
        textCenter: {
            textAlign: 'center'
        },
        padTop: {
            paddingTop: 20,
        },
        bottom: {
            flex: 1,
            justifyContent: 'flex-end',
        },
        colorWhite: {
            color: 'white',
        }
    }
);

export default styles;