import React, { useState } from "react";
import { 
  View, Text, TextInput, Button, FlatList, 
  TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions 
} from "react-native";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LeftSidebar from "../../components/LeftSidebar";
import RightSidebar from "../../components/RightSidebar";

// Get screen width for responsiveness
const screenWidth = Dimensions.get("window").width;

// Dynamic columns based on screen width
const numColumns = screenWidth < 600 ? 1 : 2;

const products = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  image: `https://via.placeholder.com/200?text=Product+${i + 1}`,
}));

export default function CatalogPage() {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cart, setCart] = useState([]);

  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
    setSearch("");
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.contentWrapper}>
        {screenWidth > 600 && <LeftSidebar />}

        <View style={styles.mainContent}>
          <Text style={styles.pageTitle}>📦 Product Catalog</Text>

          <View style={styles.searchContainer}>
            <TextInput
              style={styles.input}
              placeholder="Search products..."
              value={search}
              onChangeText={setSearch}
              onSubmitEditing={handleSearch}
              returnKeyType="search"
            />
            <Button title="Search" onPress={handleSearch} color="#FF5733" />
          </View>

          <FlatList
            data={filteredProducts}
            keyExtractor={(item) => item.id.toString()}
            numColumns={numColumns}
            columnWrapperStyle={numColumns > 1 ? styles.row : null}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.productName}>{item.name}</Text>
                <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
                  <Text style={styles.addButtonText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>

        {screenWidth > 600 && <RightSidebar />}
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f0f8ff" },
  contentWrapper: { flex: 1, flexDirection: "row" },
  mainContent: { flex: 1, paddingVertical: 20, paddingHorizontal: 15 },
  pageTitle: { fontSize: 24, fontWeight: "bold", marginBottom: 15, color: "#333", textAlign: "center" },
  searchContainer: { flexDirection: "row", marginBottom: 15, alignItems: "center", backgroundColor: "#fff", padding: 8, borderRadius: 10, shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 3 },
  input: { flex: 1, height: 35, paddingHorizontal: 10, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, fontSize: 14, marginRight: 5 },
  row: { flex: 1, justifyContent: "space-between" },
  card: { flex: 1, backgroundColor: "#ffffff", padding: 15, margin: 10, alignItems: "center", borderRadius: 12, elevation: 5, shadowColor: "#000", shadowOpacity: 0.3, shadowOffset: { width: 1, height: 3 } },
  image: { width: 180, height: 180, borderRadius: 12 },
  productName: { marginTop: 8, fontWeight: "bold", fontSize: 16, color: "#333", textAlign: "center" },
  addButton: { marginTop: 10, backgroundColor: "#FF5733", padding: 10, borderRadius: 8 },
  addButtonText: { color: "#fff", fontWeight: "bold" },
});

export default CatalogPage;
