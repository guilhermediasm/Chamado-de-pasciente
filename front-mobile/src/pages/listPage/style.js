import {StyleSheet} from 'react-native'
import Colors from '../../styles/color'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light
    },
    searchBar:{
        flex:0.1,
        justifyContent: 'center',
        backgroundColor: Colors.faint
    },
    searchInputBar:{
        flexDirection:"row",
        alignItems:"center",
        height:40,
        paddingHorizontal :10,
        borderRadius:10,
        backgroundColor: Colors.gray,
        marginHorizontal:20,
        marginVertical:10
    },
    searchInput:{
        flexDirection:"row",
        flex:1
    },
    containerList:{
        flex:0.9,
        paddingHorizontal:15,
        marginTop:10
    },
    containerIndicator: {
        flex:0.1,
        flexDirection:'row',
    },
    containerNumber:{
        alignItems: 'center',
        justifyContent:'center',
        marginHorizontal: 5
    },
    number:{
        fontSize:18,
        color: Colors.blue
    },
    textIndicator:{
        color: Colors.lightdark
    }
});

export default styles
