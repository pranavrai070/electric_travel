


import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";
import * as FileSystem from "expo-file-system";

function KycPhoto() {
  const cameraRef = useRef(null);
  const [photoUri, setPhotoUri] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(true);

  const takePhoto = async () => {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync();
      await FileSystem.copyAsync({
        from: photo.uri,
        to: FileSystem.documentDirectory + "kycPhoto.jpg",
      });
      setPhotoUri(FileSystem.documentDirectory + "kycPhoto.jpg");
      setIsCameraOpen(false);
    }
  };

  const retakePhoto = () => {
    setPhotoUri(null);
    setIsCameraOpen(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        {isCameraOpen ? (
          <Camera
            ref={cameraRef}
            style={styles.cameraPreview}
            type={Camera.Constants.Type.front}
            ratio="16:9"
          />
        ) : (
          <Image source={{ uri: photoUri }} style={styles.photoPreview} />
        )}
        <TouchableOpacity onPress={isCameraOpen ? takePhoto : retakePhoto} style={styles.cameraButton}>
          <Image source={require("../../assets/Capture.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.linkBox}>
        <TouchableOpacity onPress={retakePhoto}>
          <Text style={styles.leftButton}>Retake a photo</Text>
        </TouchableOpacity>
        <Text style={styles.rightButton}>Ready</Text>
      </View>
    </View>
  );
}

export default KycPhoto;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  top: {
    flex: 0.85,
    backgroundColor: "black",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  cameraPreview: {
    width: "100%",
    height: "100%",
  },
  photoPreview: {
    width: "100%",
    height: "100%",
  },
  cameraButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
  icon: {
    width: 50,
    height: 50,
  },
  linkBox: {
    flex: 0.15,
    display: "flex",
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  leftButton: {
    color: "#373737",
    fontWeight: "700",
    borderWidth: 2,
    borderColor: "#4BC9FF",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    height: 50,
  },
  rightButton: {
    color: "#ffffff",
    backgroundColor: "#4BC9FF",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
    height: 50,
  },
});





