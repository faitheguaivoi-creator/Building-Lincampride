import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const DashboardScreen = ({ userName, onGoToProfile, onLogout, onFindRide }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.dashboardTitle}>Dashboard</Text>
        <Text style={styles.greeting}>Hello, {userName || 'Guest'}!</Text>
        <Text style={styles.welcomeText}>Welcome to Lincampride 🚀</Text>

        {/* Find Ride Button */}
        <TouchableOpacity style={styles.findRideButton} onPress={onFindRide}>
          <Text style={styles.findRideButtonText}>Find a Ride</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileButton} onPress={onGoToProfile}>
          <Text style={styles.profileButtonText}>Go to Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  dashboardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#812265',
    marginBottom: 20,
    textAlign: 'center',
  },
  greeting: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginBottom: 8,
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  findRideButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
  },
  findRideButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  profileButton: {
    backgroundColor: '#812265',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
  },
  profileButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default DashboardScreen;