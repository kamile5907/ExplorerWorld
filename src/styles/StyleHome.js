import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const LARGURA_CONTAINER = width * 0.7;
const ESPACO = 10;
const ALTURA_BACKDROP = height;

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
  },

  viewLogo: {
    width: "100%",
    alignItems: "center",
    height: "15%",
    justifyContent: "center",
    position: "absolute",
    marginTop: -200,
  },

  logo: {
    width: "85%",
    height: "100%",
  },

  posterImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    margin: 0,
    marginBottom: 10,
    borderRadius: 20,
  },

  sombraImage: {
    width: "100%",
    height: LARGURA_CONTAINER * 1.2,
    shadowColor: "black",
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 20,
    elevation: 20,
  },

  containerFlatList: {
    width: LARGURA_CONTAINER,
  },

  moldura: {
    marginHorizontal: ESPACO,
    padding: ESPACO,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 30,
  },

  texto: {
    fontSize: 22,
    fontFamily: "BonaNovaBold",
  },

  //Backdrop
  containerBackdrop: {
    position: "absolute",
    height: "100%",
    top: 0,
    width: width,
    backgroundColor: "pink",
  },

  imagemAnimada: {
    width: "100%",
    height: "100%",
  },
});

export default stylesHome;
