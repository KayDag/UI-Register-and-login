import React, { Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      pwConfirm: "",
      phone: "",
      address: "",
      birthday: "",
    };
  }

  formatBirthday = (text) => {
    let cleaned = text.replace(/\D/g, "");

    if (cleaned.length > 8) cleaned = cleaned.slice(0, 8);

    let formatted = cleaned;

    if (cleaned.length > 4) {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4)}`;
    } else if (cleaned.length > 2) {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    }

    this.setState({ birthday: formatted });
  };

  saveUser = async () => {
    const { username, email, password, pwConfirm, phone, address, birthday } =
      this.state;

    if (password !== pwConfirm) {
      alert("Password không khớp");
      return;
    }
    if (users.find((u) => u.username === username)) {
      alert("Username đã tồn tại");
      return;
    }
    const user = {
      username,
      email,
      password,
      phone,
      address,
      birthday,
    };

    try {
      let data = await AsyncStorage.getItem("users");

      let users = data ? JSON.parse(data) : [];

      users.push(user);

      await AsyncStorage.setItem("users", JSON.stringify(users));

      alert("Đăng ký thành công");
      this.props.goToLogin();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Register</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              value={this.state.username}
              onChangeText={(text) => this.setState({ username: text })}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={this.state.email}
              onChangeText={(text) => this.setState({ email: text })}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={this.state.phone}
              onChangeText={(text) => this.setState({ phone: text })}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={styles.input}
              value={this.state.address}
              onChangeText={(text) => this.setState({ address: text })}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Date of Birth</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="dd/mm/yyyy"
              value={this.state.birthday}
              onChangeText={this.formatBirthday}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={this.state.password}
              onChangeText={(text) => this.setState({ password: text })}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={this.state.pwConfirm}
              onChangeText={(text) => this.setState({ pwConfirm: text })}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={this.saveUser}>
            <Text style={styles.signButton}>Sign up</Text>
          </TouchableOpacity>

          <View style={styles.signinContainer}>
            <Text style={styles.label}>
              Have an account?{" "}
              <Text style={styles.linkText} onPress={this.props.goToLogin}>
                Sign in
              </Text>
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
  },

  formContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#0f172a",
    borderRadius: 16,
    padding: 24,
    justifyContent: "center",
  },

  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 5,
  },

  inputGroup: {
    marginTop: 5,
  },

  label: {
    color: "#cbd5e1",
    marginBottom: 6,
    fontSize: 14,
  },

  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#334155",
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: "#1e293b",
    color: "#ffffff",
  },

  button: {
    marginTop: 20,
    backgroundColor: "#a78bfa",
    paddingVertical: 10,
    borderRadius: 14,
  },

  signButton: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    color: "#0f172a",
  },
  signinContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  signText: {
    textAlign: "center",
    color: "#cbd5e1",
    marginBottom: 6,
    fontSize: 14,
  },
});
