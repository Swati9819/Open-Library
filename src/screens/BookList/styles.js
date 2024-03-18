import { StyleSheet } from 'react-native';
import { Mixins, Colors } from "../../styles"

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        backgroundColor:Colors.COLOR_E1DCC5
    },
    title:{
        fontWeight:'500',
        color: Colors.COLOR_02598B,
        fontSize:Mixins.scaleFont(25),
        marginLeft: Mixins.scaleSizeWidth(20),
        marginTop: Mixins.scaleSizeHeight(20),
    },
    loader:{
        flex:1,
        justifyContent:'center',
        alignItems:'center' 
    },
    loadingText:{
        fontWeight:'600',
        color: Colors.COLOR_202020,
        fontSize:Mixins.scaleFont(18),
        marginTop: Mixins.scaleSize(10)
    },
    subView:{
        borderRadius: Mixins.scaleSize(4),
        backgroundColor: Colors.COLOR_FFFFF4,
        marginTop: Mixins.scaleSizeHeight(20),
        marginHorizontal: Mixins.scaleSizeWidth(10),
    },
    bookListView:{
        flexGrow:1,
        marginVertical:Mixins.scaleSizeWidth(10),
        paddingBottom:Mixins.scaleSizeHeight(80),
        marginHorizontal: Mixins.scaleSizeWidth(15),
    },
    separatorView:{
        height: Mixins.scaleSizeHeight(1),
        backgroundColor: Colors.COLOR_D3D3D3,
        marginVertical: Mixins.scaleSizeHeight(8),
    },
    bookText:{
        fontWeight:'600',
        color: Colors.COLOR_202020,
        fontSize:Mixins.scaleFont(13),
    },
    subBookText:{
        fontWeight:'400',
        color: Colors.COLOR_383838,
        fontSize:Mixins.scaleFont(13),
    }
})

export default styles