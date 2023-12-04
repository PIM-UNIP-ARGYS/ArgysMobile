import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import api from "../services/axios.service";

const HistoryScreen = () => {
  const [listData, setListData] = useState([]);

  const handleGetList = async () => {
    const list = await api.get("/folha_pagamento/historico");

    if (list.status === 200) {
      setListData(list.data);
    }
  };

  useEffect(() => {
    handleGetList();
  }, []);

  if (listData.length === 0) {
    return <View style={styles.container}></View>;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Histórico de Folhas de Pagamento</Text>

      {listData &&
        listData.map((item: any, index) => (
          <View style={styles.card}>
            <Text style={styles.subtitle}>FP: {item.nomeArquivo}</Text>
            <Text style={styles.text}>Realizar Download</Text>
          </View>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#FFF",
    padding: 20,
    marginBottom: 20,
    borderRadius: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 25,
    marginBottom: 10,
  },
});

export default HistoryScreen;
