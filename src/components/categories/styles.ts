import { StyleSheet } from "react-native";
import { style } from "../loading/styles";


export const s = StyleSheet.create({
    container:{
        maxHeight:36,
        position:"absolute",
        zIndex:1,
        top:64,
        gap:8
    },
    content:{
        gap:8,
        paddingHorizontal:24
    }
});