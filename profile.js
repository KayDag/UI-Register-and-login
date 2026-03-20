import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
export default class Profile extends Component {
  render() {
    const { user, goToLogin } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Profile</Text>

          <View style={styles.group}>
            <Text style={styles.label}>Username</Text>
            <View style={styles.box}>
              <Text style={styles.label}>{user?.username}</Text>
            </View>
          </View>

          <View style={styles.group}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.box}>
              <Text style={styles.label}>{user?.email}</Text>
            </View>
          </View>

          <View style={styles.group}>
            <Text style={styles.label}>Phone</Text>
            <View style={styles.box}>
              <Text style={styles.label}>{user?.phone}</Text>
            </View>
          </View>

          <View style={styles.group}>
            <Text style={styles.label}>Date of Birth</Text>
            <View style={styles.box}>
              <Text style={styles.label}>{user?.birthday}</Text>
            </View>
          </View>

          <View style={styles.group}>
            <Text style={styles.label}>Address</Text>
            <View style={styles.box}>
              <Text style={styles.label}>{user?.address}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.logoutButton} onPress={goToLogin}>
            <Text style={styles.logoutText}>Logout</Text>
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
    padding: 28,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 10,
  },
  group: {
    margin: 5,
  },
  label: {
    color: "#cbd5e1",
    marginBottom: 8,
    fontSize: 14,
  },
  box: {
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#334155",
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "#1e293b",
    color: "#ffffff",
  },
  logoutButton: {
    marginTop: 30,
    backgroundColor: "#a78bfa",
    paddingVertical: 14,
    borderRadius: 12,
  },
  logoutText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    color: "#0f172a",
  },
});
