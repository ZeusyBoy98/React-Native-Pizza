import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native"

const ProductDetailsScreen = () => {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>Product Details for id: {id}</Text>
        </View>
    );
};

export default ProductDetailsScreen;