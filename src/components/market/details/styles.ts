import { StyleSheet } from "react-native";
import { colors,fontFamily } from "@/styles/theme";


export const s = StyleSheet.create({
    container:{
        padding:32,
        paddingBottom:0,
        borderTopStartRadius:20,
        borderTopEndRadius:20,
        backgroundColor:colors.gray[100]
    },
    name:{
        fontSize:25,
        fontFamily:fontFamily.bold,
        color:colors.gray[600]
    },
    description:{
        fontSize:18,
        fontFamily:fontFamily.regular,
        color:colors.gray[500],
        marginTop:5
    },
    group:{
        width:'100%',
        borderBottomWidth:1,
        borderBottomColor:colors.gray[200],
        paddingBottom:16,
        marginBottom:16
    },
    title:{
        fontSize:18,
        fontFamily:fontFamily.medium,
        color:colors.gray[500],
        marginBottom:12,
        marginTop:15
        
    },
    rule:{

    }
})