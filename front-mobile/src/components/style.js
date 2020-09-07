import {StyleSheet} from 'react-native'
import Colors from '../styles/color'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:15,
        backgroundColor: Colors.primary,
        paddingVertical:10,
        marginVertical: 10,
        borderRadius:5
    },
    row:{
        flexDirection: 'row',
        marginVertical: 2
    },
    rowCodes:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginVertical: 2
    },
    textStyle:{
        marginTop:2
    }
});

export default styles
