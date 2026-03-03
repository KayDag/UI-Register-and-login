import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Username or email</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
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
          <TouchableOpacity style={styles.forgot}>
            <Text style={styles.linkText}>Forgot Password</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signinButton}>
          <Text style={styles.signText}>Sign in</Text>
        </TouchableOpacity>

        <Text style={styles.signup}>
          Don't have an account? <Text style={styles.linkText}>Sign up</Text>
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
    height: "75%",
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

  forgot: {
    alignItems: "flex-end",
    marginTop: 8,
  },

  linkText: {
    color: "#cbd5e1",
  },

  signinButton: {
    marginTop: 30,
    backgroundColor: "#a78bfa",
    paddingVertical: 14,
    borderRadius: 12,
  },

  signText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    color: "#0f172a",
  },

  signup: {
    marginTop: 25,
    textAlign: "center",
    color: "#cbd5e1",
    fontSize: 14,
  },
});
