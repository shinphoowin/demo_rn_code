import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  fullWidthScreen: {
    flex: 1,
    paddingTop: 53,
    paddingBottom: 36
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 53,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 36
  },
  container_nocenterCnt: {
    flex: 1,
    paddingTop: 22,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 36
  },
  backgroundStyle: {
    backgroundColor: 'green'
  },
  inputStyle: {
    height: 44,
    backgroundColor: '#fff',
    paddingLeft: 22,
    paddingRight: 24,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  buttonLike: {
    backgroundColor:"brown",
    padding: 8,
    borderRadius: 8,
    textAlign: "center"
  },
  spacerSmall: {
    marginVertical: 6,
  },
  spacerLarge: {
    marginVertical: 12,
  },
  colorPrimary: {
    color: "#000" 
  },
  btnSmall: {
    backgroundColor: "green",
    width: '20%',
    color: '#fff',
    textAlign: 'center',
    borderRadius: 8,
    padding:4
  },
  bgTransparent: {
    backgroundColor: "#777",
  },
  textColorBlack: {
    color: "#000",
    fontSize: 22,
    marginBottom: 8
  }
})
