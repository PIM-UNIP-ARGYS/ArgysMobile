import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Relogio from "../component/Relogio";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [jornada, setJornada] = useState([
    { horario: "08:00:00", descricao: "Entrada" },
    { horario: "12:00:00", descricao: "Saída para almoço" },
    { horario: "13:00:00", descricao: "Retorno do almoço" },
    { horario: "17:00:00", descricao: "Saída" },
  ]);

  const [localizacao, setLocalizacao] = useState(
    "Rua Albert, Vila Ciência, São Paulo"
  );

  const registrarPonto = () => {
    // Implemente a lógica para registrar o ponto aqui
  };

  const handleHistory = () => {
    navigation.navigate("Histórico");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Ponto</Text>
      <Relogio />
      <Button title="Registrar o Ponto" onPress={registrarPonto} />
      <Text style={styles.subtitle}>Sua jornada prevista para hoje é:</Text>
      {jornada.map((ponto, index) => (
        <Text style={styles.jornada}>
          {ponto.descricao}: {ponto.horario}
        </Text>
      ))}
      <View style={styles.button}>
        <Button title="Folha de Pagamento" onPress={handleHistory} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    margin: 20,
  },
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 90,
    marginBottom: 50,
  },
  jornada: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
  },
  button: {
    marginTop: 40
  }
});

export default HomeScreen;
