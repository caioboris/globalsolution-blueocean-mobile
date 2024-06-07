// ListScreen.js
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import {
  deletePlantation,
  getPlantations,
  updatePlantation,
} from "../apiService.js";
import ListItem from "../components/ListItem.js";
import EditModal from "../components/EditModal.js";

const ListScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setLoading(true);
    getPlantations()
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        Alert.alert("Erro", "Algo deu errado. Tente novamente.");
      });
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
    setModalVisible(true);
  };

  const handleUpdate = () => {
    updatePlantation(currentItem.id, currentItem)
      .then((response) => {
        const updatedData = data.map((item) =>
          item.id === currentItem.id ? response.data : item
        );
        setData(updatedData);
        setModalVisible(false);
        Alert.alert("Sucesso", "Item atualizado.");
      })
      .catch((error) => {
        Alert.alert("Erro", "Algo deu errado. Tente novamente.");
      });
  };

  const handleChange = (updatedItem) => {
    setCurrentItem(updatedItem);
  };

  const handleDelete = (item) => {
    deletePlantation(item.id)
      .then(() => {
        setData(data.filter((i) => i.id !== item.id));
        Alert.alert("Sucesso", "Item atualizado.");
      })
      .catch((error) => {
        Alert.alert("Erro", "Algo deu errado. Tente novamente.");
      });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#1e90ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Culturas cadastradas</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItem item={item} onEdit={handleEdit} onDelete={handleDelete} />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
      {error && <Text style={styles.errorText}>Error: {error.message}</Text>}

      <EditModal
        visible={modalVisible}
        item={currentItem}
        onClose={() => setModalVisible(false)}
        onSave={handleUpdate}
        onChange={handleChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87CEEB",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
    textAlign: "center",
  },
  list: {
    flexGrow: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    textAlign: "center",
  },
});

export default ListScreen;
