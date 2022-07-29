import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import ImageSlider from "react-native-image-slider";

export default function Home() {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            color: "goldenrod",
            fontSize: 35,
            fontWeight: "bold",
            marginBottom: 14,
          }}
        >
          THE KEY TO FINE DINING
        </Text>
        <Text style={{ color: "white", fontSize: 18, marginBottom: 10 }}>
          Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum
          Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus
          Aliquam Amet Tellus
        </Text>
      </View>
      <View>
        <Text
          style={{
            width: 400,
            color: "goldenrod",
            fontSize: 30,
            flexDirection: "row",
            justifyContent: "flex-end",
            marginLeft: "60%",
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          About Us
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 18,
            marginBottom: 20,
          }}
        >
          Since our modest beginnings in 2005 with a little space in Yerevan,
          ‘Organization Name’ ‘s development has been enlivened with the energy
          to cook and serve solid, Indian-roused takeout food..
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: "goldenrod",
            fontSize: 35,
            fontWeight: "bold",
            marginBottom: 30,
          }}
        >
          Gallery
        </Text>
      </View>
      <ImageSlider
        style={styles.slider}
        images={[
          "https://mir-s3-cdn-cf.behance.net/project_modules/1400/1f7fb056841643.59bed5db892bc.jpg",
          "https://i.pinimg.com/originals/ec/0c/f3/ec0cf32c9075d65d45529cf85b0a4e9f.jpg ",
          "https://i.pinimg.com/originals/db/45/1d/db451dceff953123edb0b634ead002e9.jpg",
          "https://i.pinimg.com/originals/92/53/28/925328777f7696e9604b24ce229f9b2b.jpg",
          "https://www.restocracy.ro/wp-content/uploads/2017/07/Kane-World-Food-Studio-restaurant-international-in-Bucuresti-16.jpg",
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "black",
  },
  button: {
    height: 0.1 * Dimensions.get("window").height,
    width: 0.75 * Dimensions.get("window").width,
    backgroundColor: "#f4511e",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  btntxt: {
    color: "#ffffff",
    fontSize: 20,
  },
  slider: {
    maxHeight: 400,
  },
});
