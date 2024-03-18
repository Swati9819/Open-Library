import { StyleSheet } from 'react-native';
import { Mixins, Colors } from "../../styles"

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        backgroundColor:Colors.COLOR_E1DCC5
    },
    loader:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    ImageView:{
        marginTop: Mixins.scaleSizeHeight(10),
        marginBottom: Mixins.scaleSizeHeight(30),
        marginHorizontal: Mixins.scaleSizeWidth(15)
    },
    ImageHeaderView:{
       flexDirection:'row',
       alignItems:'center', 
       justifyContent:'space-between',
       marginBottom: Mixins.scaleSizeHeight(25)
    },
    iconView:{
        alignItems:'center',
        justifyContent:'center',
        width: Mixins.scaleSizeWidth(50),
        height:Mixins.scaleSizeHeight(50),
        borderRadius: Mixins.scaleSize(25), 
        backgroundColor: Colors.COLOR_FFFFF4,
    },
    icon:{
        width:Mixins.scaleSizeWidth(20),
        height:Mixins.scaleSizeHeight(20),
    },
    rightSideView:{
        flexDirection:'row',
    },
    saveIconView:{
        marginLeft:Mixins.scaleSize(10)
    },
    image:{
        alignSelf:'center',
        width:Mixins.scaleSizeWidth(180),
        borderRadius:Mixins.scaleSize(10),
        height:Mixins.scaleSizeHeight(250),
    },
    bookDescView:{
        flex:1,
        padding:Mixins.scaleSize(12),
        borderRadius: Mixins.scaleSize(8),
        borderRadius : Mixins.scaleSize(30),
        backgroundColor: Colors.COLOR_FFFFF4,
        marginHorizontal: Mixins.scaleSizeWidth(15),
    },
    bookTitleView:{
        flex:1,
        marginLeft :  Mixins.scaleSizeWidth(20)
    },
    title:{
        fontWeight:'600',
        textAlign:'center',
        color: Colors.COLOR_02598B,
        fontSize:Mixins.scaleFont(20),
        marginTop: Mixins.scaleSizeHeight(20)
    },
    author:{
        fontWeight:'400',
        textAlign:'center',
        color: Colors.COLOR_383838,
        fontSize:Mixins.scaleFont(13), 
        marginTop:Mixins.scaleSizeHeight(10)
    },
    genreView:{
        flexWrap:'wrap',
        flexDirection:'row',
        marginTop:Mixins.scaleSizeHeight(20)
    },
    genreSubView:{
        alignItems:'center',
        justifyContent:'center',
        margin: Mixins.scaleSize(3),
        padding: Mixins.scaleSize(10), 
        borderRadius: Mixins.scaleSize(20),
        backgroundColor: Colors.COLOR_4984b8, 
    },
    genreText:{
        textAlign:'left',
        color: Colors.COLOR_FFFFFF,
        fontSize:Mixins.scaleFont(12), 
    },
    description:{
        textAlign:'left',
        color: Colors.COLOR_202020,
        fontSize:Mixins.scaleFont(15), 
        marginTop:Mixins.scaleSizeHeight(20),
    }
})

export default styles