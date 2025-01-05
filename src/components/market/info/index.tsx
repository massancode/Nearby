import { Text,View } from "react-native";
import { IconProps } from "@tabler/icons-react-native";

import { s } from "./styles";
import { colors } from "@/styles/colors";

type Props ={
    description:string,
    icon:React.ComponentType<IconProps>,
    promo?:string
}


export function Info({icon:Icon,description,promo}:Props){
    return (
        <View style={s.container}>
            <Icon size={16} color={colors.gray[400]}  />
            <Text style={[s.text,{color:promo}]}>{description}  </Text>
        </View>
    )
}