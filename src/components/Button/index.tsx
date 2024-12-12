import {TouchableOpacity,TouchableOpacityProps,Text,TextProps, ActivityIndicator} from "react-native"
import { IconProps as TableIconProps } from "@tabler/icons-react-native";
import {s} from "./styles";
import {colors} from "@/styles/theme"
import React from "react";


type BtProps = TouchableOpacityProps & {
    isLoading?:boolean
}

function Button({children,style,isLoading = false, ...rest}:BtProps){
    return (
        <TouchableOpacity style={[s.container,style]} disabled={isLoading} {...rest}>
               {isLoading  ? <ActivityIndicator size="small" color={colors.gray[100]}  /> : children }  
        </TouchableOpacity>
    )
}

function Title ({children}:TextProps){
    return(
        <Text style={s.text}>
            {children}
        </Text>
    )
}

type IconProps= {
    icon:  React.ComponentType<TableIconProps>
}

function Icon ({icon:Icon }:IconProps){
    return (
        <Icon size={24} color={colors.gray[100]}  />
    )
}

Button.Title = Title
Button.Icon = Icon

export { Button } 