import { Image, StyleSheet, View, FlatList, Pressable } from "react-native";
import products from "../data/products";
import { useNavigation } from "@react-navigation/native";

const ProductsScreen = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Pressable
            onPress={() =>
              navigation.navigate("Product Details", { id: item.id })
            }
          >
            <Image source={{ uri: item.image }} style={styles.image} />
          </Pressable>
        </View>
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default ProductsScreen;
