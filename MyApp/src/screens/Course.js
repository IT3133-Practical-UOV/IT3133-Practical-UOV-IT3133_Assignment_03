import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import { Divider } from 'react-native-paper';

export default function Courses() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.centerContainer}>
          <View style={styles.card}>
            <Text style={styles.title}>Computer Science</Text>
            <Text style={styles.description}>Code: SC101 | Dept: Engineering</Text>
            <Divider style={{ width: '80%', marginVertical: 20, backgroundColor: '#ccc' }} />
            <View style={styles.courseInfo}>
              <Text style={styles.subtitle}>Course Information</Text>
              <Text style={styles.description}>Code : CS101</Text>
              <Text style={styles.description}>Department : Engineering</Text>
              <Text style={styles.description}>Duration : 4 Years</Text>
              <Text style={styles.description}>Description : Focuses on Programming, Algorithms, and System Design</Text>
              <Divider style={{ width: '80%', marginVertical: 20, backgroundColor: '#ccc' }} />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 80
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 15,
    margin: 10,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  courseInfo: {
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 20,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    elevation: 5,
    paddingHorizontal: 10,
  },
  title: {
    paddingTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
});
