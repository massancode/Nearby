import { Text,useWindowDimensions } from "react-native";
import {s} from "./styles"
import { PlaceProps,Place} from "../place";
import Bottomsheet, {BottomSheetFlatList} from "@gorhom/bottom-sheet"
import { useRef } from "react";
import { router, Router } from "expo-router";




type Props = {
    data: PlaceProps[]
}


export function Places ({data}: Props){
   const dimensions = useWindowDimensions()
   const bottomSheetRef = useRef<Bottomsheet>(null)
   
   const snapPoints = {
    min:278,
    max:dimensions.height -128
   }
    return (
        <Bottomsheet ref={bottomSheetRef}
        snapPoints={[ snapPoints.min,snapPoints.max]}
        handleIndicatorStyle={s.indicator}
        backgroundStyle={s.container}
        enableOverDrag={false}
        >

         <BottomSheetFlatList
          data={data}
          keyExtractor={(item)=> item.id }
          renderItem={({item}) => <Place data={item} onPress={()=> router.navigate(`/market/${item.id}`)} />}
          contentContainerStyle={s.content}
          ListHeaderComponent={()=>(<Text style={s.title}> Explore Locais perto de Você</Text>)}
          showsVerticalScrollIndicator={false}
         />

        </Bottomsheet>
    )
}