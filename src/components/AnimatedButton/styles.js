import { StyleSheet } from 'react-native';
import { Mixins, Colors } from "../../styles"

const styles = StyleSheet.create({
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
})

export default styles