import {StyleSheet} from 'react-native'
import Colors from '../../styles/color'

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        padding: 20,
        margin: 25,
        flex: 1,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 3,
    },

    submitButton: {
        backgroundColor: '#272936',
        borderWidth: 0,
        borderRadius: 4,
        padding: 16,
        alignItems: 'center',
        marginBottom: 10
    },

    submitButtonText: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 15,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },

    input: {
        marginBottom: 15,
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#ddd',
        fontSize: 15,
        color: '#444',
    },
    error: {
        marginBottom: 15,
        marginTop: -15,
        color: "red"
    }
});

export default styles
