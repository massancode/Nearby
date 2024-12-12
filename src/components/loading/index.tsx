import { ActivityIndicator } from "react-native";
import { style } from "./styles";
import { colors } from "@/styles/colors";


export function Loading(){

 return( 
    <ActivityIndicator color={colors.green.base} style={style.container}/>

 )}
