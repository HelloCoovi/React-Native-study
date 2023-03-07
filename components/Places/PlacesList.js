import { FlatList, View } from "react-native";

function PlacesList({places}){
    return <View>
        <FlatList data={places} keyExtractor={(item) => item.id} renderItem={}/>
    </View>

}

export default PlacesList;