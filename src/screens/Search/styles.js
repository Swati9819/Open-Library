import { StyleSheet } from 'react-native';
import { Mixins, Colors } from "../../styles"

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        backgroundColor:Colors.COLOR_E1DCC5
    },
    backBtnView:{
        marginLeft: Mixins.scaleSizeWidth(20),
        marginBottom: Mixins.scaleSizeHeight(10)
    },
    searchView:{
        flexDirection:'row',
        alignItems:'center',
        padding: Mixins.scaleSize(12),
        borderRadius: Mixins.scaleSize(10),
        backgroundColor: Colors.COLOR_FFFFF4,
        marginTop: Mixins.scaleSizeHeight(10),
        marginHorizontal: Mixins.scaleSizeWidth(20),
    },
    input:{
        color: Colors.COLOR_202020,
        marginLeft: Mixins.scaleSizeWidth(10),
    },
    icon:{
        width: Mixins.scaleSize(20),
        height: Mixins.scaleSize(20),
    },
    separatorView:{
        height: Mixins.scaleSizeHeight(1),
        backgroundColor: Colors.COLOR_D3D3D3,
        marginVertical: Mixins.scaleSizeHeight(8),
    },
    searchListView:{
        borderRadius: Mixins.scaleSize(10),
        backgroundColor: Colors.COLOR_FFFFF4,
        marginTop: Mixins.scaleSizeHeight(10),
        marginHorizontal: Mixins.scaleSizeWidth(20),
        paddingVertical:Mixins.scaleSizeHeight(10)
    },
    listView:{
        marginLeft: Mixins.scaleSizeWidth(10)
    },
    title:{
        fontWeight:'600',
        color: Colors.COLOR_202020,
        fontSize:Mixins.scaleFont(13),
    },
    author:{
        fontWeight:'400',
        color: Colors.COLOR_383838,
        fontSize:Mixins.scaleFont(13)
    },
    noSearchView:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    noSearch:{
        height: Mixins.scaleSize(100),
        width: Mixins.scaleSize(100)
    },
    noSearchText:{
        fontWeight:'400',
        color: Colors.COLOR_202020,
        fontSize:Mixins.scaleFont(20),
        marginLeft: Mixins.scaleSizeWidth(20),
        marginTop: Mixins.scaleSizeHeight(20)
    }
})
export default styles