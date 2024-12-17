import { View,Text,Alert, } from "react-native"
import { api } from "@/services/api"
import { useEffect,useState } from "react"
import { Categories,categoriesProps } from "@/components/categories"

import { PlaceProps } from "@/components/place"
import { Places } from "@/components/places"

type MarketsProps = PlaceProps

export default function home (){

 const [categories,setCategories] = useState <categoriesProps> ([])
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

    return (
  
        <View style={{flex:1,backgroundColor:"#cececece"}}>
             <Categories data={categories} onSelected={setCategory}  selected={category}/>
             <Places data={markets}/>
        </View>
    )


}