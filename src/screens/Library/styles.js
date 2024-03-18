import { StyleSheet } from 'react-native';
import { Mixins, Colors } from "../../styles"

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        backgroundColor:Colors.COLOR_E1DCC5
    },
    title:{
        fontWeight:'800',
        color: Colors.COLOR_202020,
        fontSize:Mixins.scaleFont(35),
        marginLeft: Mixins.scaleSizeWidth(20)
    },
    bookView:{
        flex:1,
        borderRadius:15,
        marginTop: Mixins.scaleSize(20),
        backgroundColor:Colors.COLOR_FFFFF4,
        marginHorizontal: Mixins.scaleSizeWidth(20), 
    },
    bookListContainer:{
        padding:Mixins.scaleSize(15),
        marginTop: Mixins.scaleSizeHeight(15),
    },
    bookListView:{
        marginBottom: Mixins.scaleSizeHeight(20),
    },
    bookImage: {
        marginLeft: Mixins.scaleSize(10),
        width: Mixins.scaleSizeWidth(140),
        borderRadius: Mixins.scaleSize(10), 
        height:Mixins.scaleSizeHeight(200),
    },
    bookTitle:{
        fontWeight:'500',
        textAlign:'center',
        color: Colors.COLOR_000000,
        fontSize:Mixins.scaleFont(15),
        marginTop: Mixins.scaleSize(10),
        width: Mixins.scaleSizeWidth(160),
    },
    author:{
        fontWeight:'400',
        textAlign:'center',
        color: Colors.COLOR_383838,
        fontSize:Mixins.scaleFont(13),
    },
    noBook:{
        width: Mixins.scaleSizeWidth(100),
        height:Mixins.scaleSizeHeight(100),
    },
    noBookFoundView:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    noBookText:{
        fontWeight:'400',
        color: Colors.COLOR_202020,
        fontSize:Mixins.scaleFont(22),
        marginLeft: Mixins.scaleSizeWidth(20)
    }
})

export default styles