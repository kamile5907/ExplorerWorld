import React, { useRef, useEffect } from "react";
import Svg, { Path } from "react-native-svg";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Animated,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  Pressable
} from "react-native";
import stylesPaises from "../../../styles/StylePaises";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Bandeira from "../../../components/Bandeira";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useState } from "react";

const { width, height } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.8;
const ITEM_HEIGHT = ITEM_WIDTH * 1.2;
const SPACING = 20;

const places= [
  {
    id: "Santa Ana Volcano",
    source: require("../../../images/imagesAmericaCentro/elsalvador1.jpg"),
    title: "Santa Ana Volcano",
    carousel: [
      {img: require("../../../images/imagesAmericaCentro/santaanaVolcano1.jpg")},
      {img: require("../../../images/imagesAmericaCentro/santaanavolcano2.jpg")},
      {img: require("../../../images/imagesAmericaCentro/santaana6.png")},
      {img: require("../../../images/imagesAmericaCentro/santaanavolcano4.jpg")},
   ]
  },
  {
    id: "Lago De Coate Peque",
    source: require("../../../images/imagesAmericaCentro/elsalvador2.jpg"),
    title: "Lago De Coate Peque",
    carousel: [
      {img: require("../../../images/imagesAmericaCentro/coatepeque1.jpg")},
      {img: require("../../../images/imagesAmericaCentro/coatepeque.jpg.png")},
      {img: require("../../../images/imagesAmericaCentro/coatepeque3.jpg")},
      {img: require("../../../images/imagesAmericaCentro/coatepeque4.jpg")},
   ]
  },
  {
    id: "Joya De Ceren",
    source: require("../../../images/imagesAmericaCentro/elsalvador3.jpg"),
    title: "Joya De Ceren",
    carousel: [
      {img: require("../../../images/imagesAmericaCentro/joyadeceren5.png")},
      {img: require("../../../images/imagesAmericaCentro/joyadeceren6.png")},
      {img: require("../../../images/imagesAmericaCentro/joyadecren7.png")},
      {img: require("../../../images/imagesAmericaCentro/joyadeceren8.png")},
   ]
  },
  {
    id: "Cuevas De Moncagua",
    source: require("../../../images/imagesAmericaCentro/elsalvador4.jpg"),
    title: "Cuevas De Moncagua",
    carousel: [
      {img: require("../../../images/imagesAmericaCentro/moncagua1.jpg")},
      {img: require("../../../images/imagesAmericaCentro/moncagua2.jpg")},
      {img: require("../../../images/imagesAmericaCentro/moncagua3.jpg")},
      {img: require("../../../images/imagesAmericaCentro/moncagua4.jpg")},//
   ]
  },
  {
    id: "Tazumal",
    source: require("../../../images/imagesAmericaCentro/elsalvador5.jpg"),
    title: "Tazumal",
    carousel: [
      {img: require("../../../images/imagesAmericaCentro/tazumal5.png")},
      {img: require("../../../images/imagesAmericaCentro/tazumal2.jpg")},//
      {img: require("../../../images/imagesAmericaCentro/tazumal6.png")},//
      {img: require("../../../images/imagesAmericaCentro/tazumal4.jpg")},
   ]
  },
];

const ElSalvador = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();



  const [font] = useFonts({
    Pacifico: require("../../../fonts/Pacifico-Regular.ttf"),
    Bebas: require("../../../fonts/Bebas.ttf"),
    Noto: require("../../../fonts/NotoSherif.ttf"),
    BonaNova: require("../../../fonts/BonaNovaItalic.ttf"),
    BonaNovaBold: require("../../../fonts/BonaNovaBold.ttf"),
    Lilita: require("../../../fonts/LilitaOne.ttf"),
    Display: require("../../../fonts/DisplayExtraBoldItalic.ttf"),
    DisplayBold: require("../../../fonts/DisplayBoldItalic.ttf"),
    DisplayItalic: require("../../../fonts/DisplayItalic.ttf"),
  });
  if (!font) {
    return null;
  }


  const scaleAnim = useRef(new Animated.Value(0)).current;
  const bgOpacityAnim = useRef(new Animated.Value(0)).current;
  const itemAnimations = places.map(
    () => useRef(new Animated.Value(0)).current
  );

  useEffect(() => {
    // Primeiro, anima a opacidade da imagem de fundo
    Animated.timing(bgOpacityAnim, {
      toValue: 1,
      duration: 1,
      useNativeDriver: true,
    }).start(() => {
      // Depois que a imagem de fundo aparecer, começa a animação de escala
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start(() => {
        // Após a escala, anima os itens do FlatList um de cada vez
        itemAnimations.forEach((anim, index) => {
          Animated.timing(anim, {
            toValue: 1,
            duration: 300,
            delay: index * 100, // Cada item com um atraso
            useNativeDriver: true,
          }).start();
        });
      });
    });
  }, []);



  return (
    <View style={stylesPaises.container}>

      <ImageBackground
        resizeMode="cover"
        source={require("../../../images/imagesAmericaCentro/elsalvador.jpg")}
        blurRadius={5}>

        <View style={stylesPaises.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={stylesPaises.btnVoltar}
          >
            <MaterialCommunityIcons
              name="arrow-left-thin"
              size={35}
              color="#384554"
            />
          </TouchableOpacity>
          <Bandeira pais="SV" />
        </View>
        <Svg
          viewBox="0 0 1440 320"
          width="100%"
          height={height * 0.25}
          preserveAspectRatio="none"
          style={stylesPaises.svg}
        >
          <Path
            fill="#384554"
            fillOpacity="1"
            d="M0,128L60,112C120,96,240,64,360,85.3C480,107,600,181,720,213.3C840,245,960,235,1080,240C1200,245,1320,267,1380,277.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </Svg>
        <View style={stylesPaises.viewTitle}>
          <Text style={stylesPaises.title}>Pontos Turisticos</Text>
        </View>

        <Animated.FlatList
          data={places}
          style={stylesPaises.flatlist}
          keyExtractor={(item) => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={ITEM_WIDTH + SPACING * 2}
          decelerationRate="fast"
          bounces={true}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          contentContainerStyle={{ paddingHorizontal: SPACING }}
          renderItem={({ item, index }) => {
            const inputRange = [
              (index - 1) * (ITEM_WIDTH + SPACING * 2),
              index * (ITEM_WIDTH + SPACING * 2),
              (index + 1) * (ITEM_WIDTH + SPACING * 2),
            ];

            const scale = scrollX.interpolate({
              inputRange,
              outputRange: [0.9, 1, 0.9],
              extrapolate: "clamp",
            });

            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.6, 1, 0.6],
              extrapolate: "clamp",
            });

            const rotate = scrollX.interpolate({
              inputRange,
              outputRange: ["-8deg", "0deg", "8deg"],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                style={[
                  stylesPaises.flatlistItem,
                  {
                    transform: [{ scale }, { rotate }],
                    opacity: itemAnimations[index],
                  },
                ]}
              >
                  <Pressable
                    onPress={() =>
                      navigation.navigate('DescriptionPage', {
                        id: item.id,
                        carousel: item.carousel,
                      })
                    }
                  >
                    <View style={stylesPaises.flatlistImageContainer}>
                      <Image source={item.source} style={stylesPaises.flatlistImage} />
                    </View>
                    <Text style={stylesPaises.flatlistTitle}>{item.title}</Text>
                  </Pressable>
              </Animated.View>


            );
          }}
        />
      </ImageBackground>
    </View>
  )
}

export default ElSalvador;