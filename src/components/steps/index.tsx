import { View,Text } from "react-native";
import { IconMapPin,IconQrcode,IconTicket,IconShare,IconArrowBadgeRight } from "@tabler/icons-react-native";


import { styles } from "./styles";
import { Step } from "../step";
import { Button } from "../Button";

export function Steps(){
    return(

        <View style={styles.container}>
            <Text style={styles.title} >Veja como funciona:</Text>
            <Step icon={IconMapPin} title='Encontre estabelecimentos' description="Veja locais perto de você que são parceiros Nearby"/>
            <Step icon={IconQrcode} title='Ative o cupom com QR Code' description='Escaneie o código no estabelecimento para usar o benefício'/>
            <Step icon={IconMapPin} title='Garanta vantagens perto de você' description='Ative cupons onde estiver, em diferentes tipos de estabelecimento'/>
            <Step icon={IconShare} title='Compartilhe com seus amigos' description='Ganhe recompesas por ajudar seus amiguinhos'/>
        </View>
    )
}