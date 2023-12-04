import React, { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import moment from "moment";

const Relogio = () => {
  const [horaAtual, setHoraAtual] = useState(moment().format("HH:mm:ss"));

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraAtual(moment().format("HH:mm:ss"));
    }, 1000);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(intervalo);
  }, []);

  return <Text style={styles.title}>{horaAtual}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 64,
    textAlign: "center",
    margin: 40,
    color: "#0066FF"
  },
});

export default Relogio;
