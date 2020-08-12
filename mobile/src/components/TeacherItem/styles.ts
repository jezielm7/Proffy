import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    borderColor: '#e6e6f0',
    backgroundColor: '#fff',
  },
  profile: {
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eee',
  },
  profileInfo: {
    marginLeft: 16,
  },
  name: {
    fontSize: 20,
    color: '#32264d',
    fontFamily: 'Archivo_700Bold',
  },
  subject: {
    marginTop: 4,
    fontSize: 12,
    color: '#6a6180',
    fontFamily: 'Poppins_400Regular',
  },
  bio: {
    fontSize: 14,
    lineHeight: 24,
    color: '#6a6180',
    marginHorizontal: 24,
    fontFamily: 'Poppins_400Regular',
  },
  footer: {
    padding: 24,
    marginTop: 24,
    alignItems: 'center',
    backgroundColor: '#fafafc',
  },
  price: {
    fontSize: 14,
    color: '#6a6180',
    fontFamily: 'Poppins_400Regular',
  },
  priceValue: {
    fontSize: 16,
    color: '#8257e5',
    fontFamily: 'Archivo_700Bold',
  },
  buttonsContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  favoriteButton: {
    width: 56,
    height: 56,
    marginRight: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8257e5',
  },
  favorited: {
    backgroundColor: '#e33d3d'
  },
  contactButton: {
    flex: 1,
    height: 56,
    marginRight: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#04d361',
  },
  contactBtnText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 16,
    fontFamily: 'Archivo_700Bold',
  },
});

export default styles;