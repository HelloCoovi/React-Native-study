import { useEffect } from "react";
import { ScrollView, Image, View, StyleSheet, Text } from "react-native";
import OutlinedButton from "../components/UI/OutlinedButton";
import { Colors } from "../constants/colors";

function PlaceDetails({ route }) {
  function shawOnMapHandler() {}

  const selectedPlaceId = route.params.placeId;
  useEffect(() => {
    // 단일데이터 불러오기
  }, [selectedPlaceId]);

  return (
    <ScrollView>
      <Image style={styles.image} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>주소</Text>
        </View>
        <OutlinedButton icon="map" onPress={shawOnMapHandler}>
          지도 보기
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}

export default PlaceDetails;

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
  },
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontSize: "bold",
    fontSize: 16,
  },
});
