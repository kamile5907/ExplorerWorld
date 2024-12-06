import {
  Pressable,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
  StatusBar,
} from "react-native";
import stylesContinente from "../styles/StyleContinentes";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";
import React from "react";

export default function Europa() {
  const navigation = useNavigation();


  const scrollY = React.useRef(new Animated.Value(0)).current;

  const ITEM_SIZE = 190;

  const [font] = useFonts({
    Pacifico: require("../fonts/Pacifico-Regular.ttf"),
    Bebas: require("../fonts/Bebas.ttf"),
    Noto: require("../fonts/NotoSherif.ttf"),
    BonaNova: require("../fonts/BonaNovaItalic.ttf"),
    BonaNovaBold: require("../fonts/BonaNovaBold.ttf"),
    Lilita: require("../fonts/LilitaOne.ttf"),
    Display: require("../fonts/DisplayExtraBoldItalic.ttf"),
    DisplayBold: require("../fonts/DisplayBoldItalic.ttf"),
    DisplayItalic: require("../fonts/DisplayItalic.ttf"),
  });
  if (!font) {
    return null;
  }

  const data = [
    {
      source: require("../images/Europa/grecia.jpg"),
      title: "Grécia",
      subtitle: "95º Maior país do mundo",
      populacao: "10 256 001",
      tamanho: "9131 990 km²",
      route: () => navigation.navigate("Grecia"),
    },
    {
      source: require("../images/Europa/frança.jpg"),
      title: "França",
      subtitle: "48º Maior país do mundo",
      populacao: "68,4 Mi",
      tamanho: "551 500 km²",
      route: () => navigation.navigate("Franca"),
    },
    {
      source: require("../images/Europa/italia.jpg"),
      title: "Itália",
      subtitle: "71º Maior país do mundo",
      populacao: "60 703 666",
      tamanho: "301 338 km²",
      route: () => navigation.navigate("Italia"),
    },
    {
      source: require("../images/Europa/inglaterra.jpg"),
      title: "Inglaterra",
      subtitle: "106º Maior país do mundo",
      populacao: "69 689 583",
      tamanho: "130 395 km²",
      route: () => navigation.navigate("Inglaterra"),
    },
    {
      source: require("../images/Europa/espanha.jpg"),
      title: "Espanha",
      subtitle: "51º Maior país do mundo",
      populacao: "46 300 118",
      tamanho: "504 782 km²",
      route: () => navigation.navigate("Espanha"),
    },
  ];

  return (
    <View style={stylesContinente.container}>
      <Animated.View style={stylesContinente.topView}>
        <Image
          source={require("../images/Europa/europa.jpg")}
          style={stylesContinente.topImage}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={stylesContinente.btnVoltar}>
          <MaterialCommunityIcons name="arrow-left" size={35} color={"white"} />
        </TouchableOpacity>

        <Text style={stylesContinente.tituloPrincipal}>Europa</Text>
      </Animated.View>

      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        contentContainerStyle={{
          padding: 20,
          paddingTop: StatusBar.currentHeight || 42,
        }}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
            extrapolate: "clamp",
          });

          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];

          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0],
            extrapolate: "clamp",
          });

          return (
            <View style={stylesContinente.containerFlatlist}>
              <Pressable onPress={item.route}>
                <Animated.View
                  style={[
                    stylesContinente.card,
                    {
                      transform: [
                        {
                          scale: scrollY.interpolate({
                            inputRange: [
                              -1,
                              0,
                              ITEM_SIZE * index,
                              ITEM_SIZE * (index + 0.5),
                              ITEM_SIZE * (index + 2),
                            ],
                            outputRange: [1, 1, 1, 0.85, 0],
                            extrapolate: "clamp",
                          }),
                        },
                      ],
                      opacity: scrollY.interpolate({
                        inputRange: [
                          -1,
                          0,
                          ITEM_SIZE * index,
                          ITEM_SIZE * (index + 0.5),
                          ITEM_SIZE * (index + 2),
                        ],
                        outputRange: [1, 1, 1, 0.5, 0],
                        extrapolate: "clamp",
                      }),
                    },
                  ]}
                >
                  <View style={stylesContinente.ImgRotate}>
                    <Image
                      source={item.source}
                      style={stylesContinente.imagePais}
                    />
                  </View>
                  <View style={stylesContinente.viewAlinhamento}>
                    <Text style={stylesContinente.tituloPais}>
                      {item.title}
                    </Text>
                    <Text style={stylesContinente.subtituloPais}>
                      {item.subtitle}
                    </Text>
                    <View style={stylesContinente.viewIcones}>
                      <View style={stylesContinente.icones}>
                        <MaterialCommunityIcons
                          name="account-group"
                          size={25}
                          color={"white"}
                        />
                        <View style={stylesContinente.espaco}></View>
                        <Text style={stylesContinente.textosIcones}>
                          {item.populacao}
                        </Text>
                      </View>
                      <View style={stylesContinente.espaco}></View>
                      <View style={stylesContinente.icones}>
                        <Text style={stylesContinente.textosIcones}>
                          {item.tamanho}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Animated.View>
              </Pressable>
            </View>
          );
        }}
      />
    </View>
  );
}
