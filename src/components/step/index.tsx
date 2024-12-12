import {Text,View} from 'react-native';

import { colors } from '@/styles/colors';

import { styles } from './styles';
import { findFocusedRoute } from '@react-navigation/native';
import { IconProps } from '@tabler/icons-react-native';

type props ={
    title:string,
    description:string,
    icon: React.ComponentType<IconProps>
}

export function Step({title,description,icon: Icon}:props){
    return(
        <View style={styles.container} >
            {Icon && <Icon size={32} color={colors.red.base} />}
           <View style={{flex:1}}>
            <Text style={styles.title} >{title}</Text>
            <Text style={styles.description} >{description}</Text>
          </View>
        </View>
    )
}