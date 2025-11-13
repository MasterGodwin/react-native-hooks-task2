//Build a Search Filter with Child Component — parent holds the list, child renders filtered results. Use useCallback for the filter handler to prevent re-renders of the child.

import { useState, useCallback, memo } from "react";
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity} from "react-native";
import { useRouter } from "expo-router";

const FilteredList = memo(({ data, filterHandler }) => {
  const filteredData = filterHandler(data);
  const router = useRouter();

  return (
    <FlatList
      data={filteredData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      )}
    />
  );
});

export default function App8() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const itemList = [
    "Apple",
    "Banana",
    "Cherry",
    "Grapes",
    "Mango",
    "Orange",
    "Papaya",
    "Pineapple",
    "Strawberry",
    "Watermelon",
  ];

  const filterHandler = useCallback(
    (list) => {
      return list.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
      );
    },
    [search] 
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Filter App</Text>

      <TextInput
        style={styles.input}
        placeholder="Type to search..."
        value={search}
        onChangeText={setSearch}
      />
 
      <FilteredList data={itemList} filterHandler={filterHandler} />

      <TouchableOpacity style={styles.Button2} onPress={() => router.push("/App8")}> 
        <Text style={styles.buttonText}>Back Page</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button2} onPress={() => router.push("/App10")}> 
        <Text style={styles.buttonText}>Next Page</Text> 
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f8ff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  itemContainer: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
  },
  Button2: {
        padding: 10,
        backgroundColor: '#5bc0de',
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 18,
    }
});
