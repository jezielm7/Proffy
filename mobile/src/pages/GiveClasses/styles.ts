import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'center',
    backgroundColor: '#8257E5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    maxWidth: 180,
    lineHeight: 37,
    fontFamily: 'Archivo_700Bold',
  },
  description: {
    fontSize: 16,
    marginTop: 24,
    maxWidth: 240,
    lineHeight: 26,
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular',
  },
  button: {
    height: 58,
    borderRadius: 8,
    marginVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#04d361',
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
  },
});

export default styles;