// ListItem.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ListItem = ({ item, onEdit, onDelete }) => (
  <View style={styles.itemContainer}>
    <TouchableOpacity onPress={() => onEdit(item)} style={styles.itemContent}>
      <Text style={styles.itemTitle}>{item.producerName}</Text>
      <Text>Local: {item.location}</Text>
      <Text>Quantidade de mariscos: {item.quantity}</Text>
      <Text>Espécie: {item.species}</Text>
      <Text>
        Espécie intrusa na plantação?: {item.intruderSpecies ? "Sim" : "Não"}
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {console.log('it works'); onDelete(item)}} style={styles.deleteIcon}>
      <Icon name="trash-outline" size={24} color="red" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 5,
    marginBottom: 10,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  deleteIcon: {
    marginLeft: 10,
  },
});

export default ListItem;
