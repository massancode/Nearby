import {View,Text} from "react-native"
import {IconPhone,IconMapPin,IconTicket} from "@tabler/icons-react-native"

import { s } from "./styles"
import { Info } from "../info"



export type PropsDetails = {
    address:string,
    coupons:number,
    cover:string,
    description:string,
    name:string,
    phone:string, 
    rules:{
        description:string,
        id:string,
        
    }[]
}

type Props ={
    data:PropsDetails
}

export function Details ({data}:Props){
    return (
        <View style={s.container}>
            <Text style={s.name}>{data.name} </Text>
            <Text style={s.description}>{data.description} </Text>

            <View style={s.group}>
            <Text style={s.title}>Informações</Text>

            <Info icon={IconTicket} description={`${data.coupons} cupons disponiveis`} promo={data.coupons != 0 ? 'red' : 'null' } />

            <Info icon={IconMapPin} description={data.address} />

            <Info icon={IconPhone} description={data.phone} />

            </View>
            
            <View style={s.group}>
                     <Text style={s.title}>Regulamento</Text>
                     {data.rules.map((item)=> <Text key={item.id} style={s.description} > {`\u2022 ${item.description}`}  </Text> )} 
            </View>

        </View>
    )
}