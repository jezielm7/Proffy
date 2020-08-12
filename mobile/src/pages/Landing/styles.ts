import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'center',
    backgroundColor: '#8257E5',
  },
  banner: {
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginTop: 80,
    lineHeight: 30,
    fontFamily: 'Poppins_400Regular',
  },
  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },
  buttonsContainer: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 24,
    height: 150,
    width: '48%',
    borderRadius: 8,
    backgroundColor: '#666',
    justifyContent: 'space-between',
  },
  buttonPrimary: {
    backgroundColor: '#9871f5',
  },
  buttonSecondary: {
    backgroundColor: '#04d361',
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Archivo_700Bold',
  },
  totalConnections: {
    fontSize: 12,
    marginTop: 40,
    maxWidth: 135,
    lineHeight: 20,
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular',
  },
});

export default styles;