import {  View, Alert, Modal,StatusBar,ScrollView } from "react-native";
import {useLocalSearchParams,router, Redirect} from "expo-router"
import { api } from "@/services/api";
import { useEffect,useState,useRef } from "react";
import { Loading } from "@/components/loading";
import { Cover } from "@/components/market/cover";
import { Coupon } from "@/components/market/coupon";
import { PropsDetails,Details } from "@/components/market/details";
import { Button } from "@/components/Button";
import { useCameraPermissions,CameraView } from "expo-camera";

type DataProps = PropsDetails

export default  function Market (){
    
    const [data,setData] = useState<DataProps>()

    const [isLoading,setIsloading] = useState<boolean>(true)

    const [coupon,setCoupon] = useState<string | null>(null)

    const [couponIsFetching,setCouponIsFetching]= useState<boolean> (false)

    const [isVisibleCameramodal,setIsVisibleCameramodal] = useState(false)

    const params = useLocalSearchParams<{id:string}>()       
     
    const [permission,requestPermisssion]= useCameraPermissions()

    const qrlock = useRef(false)
    console.log(params.id)
     
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

     async function handleOpenCamera(){
            try{
              const {granted} = await requestPermisssion()
                if(!granted){
                  return Alert.alert("Voce precisa habilitar o uso da camera")
                }  
                qrlock.current= false
                setIsVisibleCameramodal(true)
            }catch (error) {
              console.log(error)
              Alert.alert("Não foi possivel utilizar a camera")
            }
    }

    async function getCupon(id:string){
      try{
         setCouponIsFetching(true)

         const {data} = await api.patch("/coupons/"+id)
         
         Alert.alert("Cupom",data.coupon)
         setCoupon(data.coupon)


      }catch(error){
        console.log(error)
        Alert.alert("não foi possivel recuperar o cupon")
      }finally{
        setCouponIsFetching(false)
      }
    }
     
   function handleUseCoupon(id:string){
      setIsVisibleCameramodal(false)
      Alert.alert("cupom",
        "Não é possivel reutilizar um cupom resgatado. Deseja realmente resgatar o cupom?",
        [
          {style:"cancel",text:"não!"},
          {text:"sim", onPress:()=> getCupon(id)}
        ]
      )
   }

    useEffect( ()=> {fethcMarket()},[params.id,coupon] )

    if(isLoading){
        return <Loading/>
    }

    if(!data){
        return
        <Redirect href='/home' />
    }

    return ( 
    
        <View style={{flex:1}} >
              <StatusBar barStyle= "light-content"  hidden={isVisibleCameramodal } />

          <ScrollView showsVerticalScrollIndicator={false} >
             <Cover uri={data.cover}  />
             <Details data={data}/>
             {coupon && <Coupon code={coupon} />}
          </ScrollView>

             <View style={{padding:32}}> 
                  <Button onPress={handleOpenCamera} >
                    <Button.Title>VALIDAR CUPON COM QR CODE</Button.Title>
                  </Button>
             </View>

              
          <Modal style={{flex:1}} visible={isVisibleCameramodal} >
            <CameraView style={{flex:1}}
            facing="back"
            onBarcodeScanned={({data})=> { if(data && ! qrlock.current){ 
              qrlock.current = true 
              setTimeout(()=> handleUseCoupon(data),500)
              } 
            }}
            />

            <View style={{position:"absolute",bottom:32,left:32,right:32}} >
              <Button onPress={()=> setIsVisibleCameramodal(false)} isLoading={couponIsFetching} >
                <Button.Title>Voltar</Button.Title>
              </Button>
            </View>
          </Modal>
        </View>
    )
}