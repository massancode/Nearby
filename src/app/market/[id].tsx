import {  View, Alert } from "react-native";
import {useLocalSearchParams,router, Redirect} from "expo-router"
import { api } from "@/services/api";
import { useEffect,useState } from "react";
import { Loading } from "@/components/loading";
import { Cover } from "@/components/market/cover";
import { PropsDetails,Details } from "@/components/market/details"

type DataProps = PropsDetails

export default  function Market (){
    
    const [data,setData] = useState<DataProps>()
    const [isLoading,setIsloading] = useState<boolean>(true)

    const params = useLocalSearchParams<{id:string}>()       
     
    async function fethcMarket(){
        try{
            const {data} = await api.get (`/markets/${params.id}`)
            setData (data)
            setIsloading(false)
        }
        catch(error){
        console.log(error)
        Alert.alert("error", "não foi possivel carregar os dados", [{text:"ok", onPress: () => router.back() }])
        }
    }

    useEffect( ()=> {fethcMarket()},[params.id] )

    if(isLoading){
        return <Loading/>
    }

    if(!data){
        return
        <Redirect href='/home' />
    }

    return ( 
    
        <View style={{flex:1}} >
             <Cover uri={data.cover}  />
             <Details data={data}/>
        </View>
    )
}