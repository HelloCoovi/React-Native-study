import { Alert, Button, View, Text, Image, StyleSheet } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";
import { Colors } from "../../constants/colors";
import OutlinedButton from "../UI/OutlinedButton";

function ImagePicker({ onTakeImage }) {
  const [pickedImage, setPickedImage] = useState();
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "사진 사용 권한이 없습니다!",
        "장소를 등록하기 위해서는 사진 권한을 허용 해야합니다."
      );
      return false;
    }

    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    // expo-image-picker 사용법 변화로 코드 변경
    // setPickedImage(image);
    console.log(image.assets);
    setPickedImage(image.assets[0].uri);

    onTakeImage(image.assets[0].uri);
  }

  let imagePreview = <Text>사진을 촬영해주세요!</Text>;

  if (pickedImage) {
    imagePreview = (
      // expo-image-picker 사용법 변화로 코드 변경
      // <Image style={styles.image} source={{ uri: pickedImage.uri }} />
      <Image style={styles.image} source={{ uri: pickedImage }} />
    );
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedButton icon="camera" onPress={takeImageHandler}>
        사진 촬영하기
      </OutlinedButton>
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
