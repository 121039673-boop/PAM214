import React, { useState } from 'react';
import { View, Text, Button, Modal, Pressable, StyleSheet } from 'react-native';

export default function BottomScreen() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Abrir Bottom Sheet" onPress={() => setVisible(true)} />

      <Modal
        transparent
        animationType="slide"
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <Pressable style={styles.overlay} onPress={() => setVisible(false)}>
          <View style={styles.sheet}>
            <Text style={styles.text}>Hola desde el Bottom Sheet 👋</Text>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'flex-end' },
  sheet: {
    backgroundColor: 'red',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: 200,
    alignItems: 'center',
  },
  text: { fontSize: 18 },
});
