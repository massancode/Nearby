
import { View,Text, TouchableOpacity } from "react-native";
import { S } from "./styles";
import { TouchableOpacityProps } from "react-native";

type props = TouchableOpacityProps & {
    name: string,
    adress: string
}

export function InfoBallon({name,adress,...rest}:props){
    return(
      <View>
        <Text style={S.name}>  {name} </Text>
        <Text style={S.adress}> {adress}</Text>
      </View>
    )
}