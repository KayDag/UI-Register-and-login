import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  const [email, setEmail] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Register</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          ></TextInput>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          ></TextInput>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          ></TextInput>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={pwConfirm}
            onChangeText={setPwConfirm}
          ></TextInput>
        </View>

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signText}>Sign up</Text>
        </TouchableOpacity>

        <Text style={styles.signin}>
          Have an account? <Text style={styles.linkText}>Sign in</Text>
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  formContainer: {
    height: "85%",
    width: "90%",
    backgroundColor: "#0f172a",
    borderRadius: 16,
    padding: 24,
    justifyContent: "center",
  },

  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 10,
  },

  inputGroup: {
    marginTop: 20,
  },

  label: {
    color: "#cbd5e1",
    marginBottom: 8,
    fontSize: 16,
  },

  input: {
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#334155",
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: "#1e293b",
    color: "#ffffff",
  },

  signupButton: {
    marginTop: 30,
    backgroundColor: "#a78bfa",
    paddingVertical: 14,
    borderRadius: 12,
  },

  linkText: {
    color: "#cbd5e1",
  },

  signText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    color: "#0f172a",
  },

  signin: {
    marginTop: 25,
    textAlign: "center",
    color: "#cbd5e1",
    fontSize: 14,
  },
});
