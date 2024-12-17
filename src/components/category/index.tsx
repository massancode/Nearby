import { Text,Pressable,PressableProps } from "react-native";
import { s } from "./style";
import { categoriesIcons } from "@/utils/categories-icons";
import { colors } from "@/styles/colors";



type props = PressableProps & {
    name:String
    iconId:string,
    isSelected?:boolean,
  
}

export function Category ({iconId,isSelected = false,name,...rest}:props){
       const Icon = categoriesIcons[iconId]
      
    return (
        <Pressable  style={[s.container, isSelected && s.containerSelectd] } {...rest} >
            <Icon  size={16} color={colors.gray[isSelected ? 100 : 400]}/>
            <Text style={[s.name, isSelected && s.nameSelected]} >
                {name}
            </Text>
        </Pressable>
    )
}