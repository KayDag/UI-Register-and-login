import React, { Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default class Forgot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      newPw: "",
      cfpw: "",
    };
  }
  replacePw = async () => {
    const { username, email, newPw, cfpw } = this.state;

    if (newPw !== cfpw) {
      alert("Password không khớp");
      return;
    }

    let data = await AsyncStorage.getItem("users");
    let users = data ? JSON.parse(data) : [];

    const index = users.findIndex(
      (u) => u.username === username && u.email === email,
    );

    if (index !== -1) {
      users[index].password = newPw;

      await AsyncStorage.setItem("users", JSON.stringify(users));
      alert("Đổi mật khẩu thành công");
      this.props.goToLogin();
    } else {
      alert("Không tìm thấy tài khoản");
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Forgot Password</Text>
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
            <Text style={styles.label}>New Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={this.state.newPw}
              onChangeText={(text) => this.setState({ newPw: text })}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={this.state.cfpw}
              onChangeText={(text) => this.setState({ cfpw: text })}
            />
            <TouchableOpacity
              style={styles.forgot}
              onPress={this.props.goToLogin}
            >
              <Text style={styles.linkText}>Sign in</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={this.replacePw}>
            <Text style={styles.signText}>Set Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  button: {
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
  linkText: {
    color: "#cbd5e1",
  },
  forgot: {
    alignItems: "flex-end",
    marginTop: 8,
  },
});
