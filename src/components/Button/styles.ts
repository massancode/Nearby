import { StyleSheet } from "react-native";  

import{colors,fontFamily} from "@/styles/theme"

export const s = StyleSheet.create ({
    container:{
          height:56,
          maxHeight:56,
          backgroundColor:colors.green.base,
          borderRadius:10,
          justifyContent:'center',
          flexDirection:'row',
          gap:14,
          alignItems:'center'
    },
    text:{
        color:colors.gray[100],
        fontFamily:fontFamily.semiBold,
        fontSize:16,
      
    }
    
})