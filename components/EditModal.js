// EditModal.js
import React from "react";
import { View, Text, TextInput, Button, StyleSheet, Modal } from "react-native";

const EditModal = ({ visible, item, onClose, onSave, onChange }) => {
  if (!item) return null;

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Editar Item</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome do Produtor"
          value={item.producerName}
          onChangeText={(text) => onChange({ ...item, producerName: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Local"
          value={item.location}
          onChangeText={(text) => onChange({ ...item, location: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantidade"
          value={item.quantity}
          onChangeText={(text) => onChange({ ...item, quantity: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Espécie"
          value={item.species}
          onChangeText={(text) => onChange({ ...item, species: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Espécie intrusa na plantação?"
          value={item.intruderSpecies}
          onChangeText={(text) => onChange({ ...item, intruderSpecies: text })}
        />
        <Button title="Salvar" onPress={onSave} />
        <Button title="Cancelar" onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default EditModal;
