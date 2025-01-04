import { View,Text,Alert,StatusBar } from "react-native"
import { api } from "@/services/api"
import { useEffect,useState } from "react"
import MapView, {Callout,Marker} from "react-native-maps"


import { PlaceProps } from "@/components/place"
import { Places } from "@/components/places"
import { Categories,categoriesProps } from "@/components/categories"
import { InfoBallon } from "@/components/InfoBallon"
import { navigate } from "expo-router/build/global-state/routing"
import { router, Router } from "expo-router"


type MarketsProps = PlaceProps & {
    latitude:number,
    longitude:number
}

const currentLocation = {
    latitude: -23.561187293883442,
    longitude: -46.656451388116494
}



export default function home (){

 const [categories,setCategories] = useState <categoriesProps>([])
 const [category,setCategory] = useState <string> ("") 
 const [markets,setMarkets] = useState <MarketsProps[]>()

    async function FetchCategories() {

        try{
            const {data} = await api.get ("/categories")
            setCategories(data)
            setCategory(data[0].id)
            

        }
        catch (error) {
            console.log (error);
            Alert.alert(`não foi possiveel carregar as categorias`)
        }
        
    }

    async function FetchMarkets (){
      
        try{
            if(!category){
                return
            }
              const {data} = await api.get ("markets/category/"+ category)
              setMarkets(data)
        }
        catch (error){
            console.log(error)
            Alert.alert('não foi possivel carregar locais')
        }

    }
    
    useEffect(()=> {FetchCategories()},[])


    useEffect(()=> {FetchMarkets()},[category])

  if(!markets){
    return
  }

    return (
        
        <View style={{flex:1}}>

             <StatusBar barStyle={"default"} backgroundColor={"black"}/>
            
             <Categories data={categories} onSelected={setCategory}  selected={category}   />

             <MapView  style={{flex:1}}   initialRegion={{ 
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
                latitudeDelta:0.01,
                longitudeDelta: 0.01
               }}>
                
            

                <Marker identifier="current" coordinate={{
                    latitude:currentLocation.latitude,
                    longitude:currentLocation.longitude
                }}
                image={require("@/assets/location.png")}    

                />
                
                {markets?.map ((item)=>(
                        <Marker
                        key={item.id}
                        identifier={item.id}
                        coordinate={{
                            latitude:item.latitude,
                            longitude:item.longitude
                        }}
                        image={require("@/assets/pin.png")}
                        >
                            <Callout onPress={() => router.navigate (`/market/${item.id}`)} >
                                      <InfoBallon name={item.name} adress={item.address} />
                            </Callout>
                        </Marker>
                    ))}
                    
            </MapView>
            
             
                                  
             
             <Places data={markets}/>
             
        </View>
    )


}