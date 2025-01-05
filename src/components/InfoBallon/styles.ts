import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { StyleSheet } from "react-native";


export const S = StyleSheet.create({
    name: {
       fontSize:14,
       color: colors.gray[600],
       fontFamily: fontFamily.medium
    },
    adress:{
        fontSize:14,
        color: colors.gray[600],
        fontFamily: fontFamily.medium
     }


})