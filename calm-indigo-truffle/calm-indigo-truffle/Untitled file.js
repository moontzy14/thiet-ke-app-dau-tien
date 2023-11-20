import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Full name: NGUYEN TUONG VY
      </Text>
      <Text style={styles.paragraph}>
        Phone: 0942479076
      </Text>
      <Text style={styles.paragraph}>
        Student ID: 220501708
      </Text>   
      <Text style={styles.paragraph}>
        Email: vnguyentuong309@hmil.com
      </Text>
      <Text style={styles.paragraph}>
        Hobbies: Eating and gaming
      </Text>
      <Image style={styles.logo} source={require('../assets/meo.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});