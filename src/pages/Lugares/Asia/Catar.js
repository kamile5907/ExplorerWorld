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
  Pressable,
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

const places = [
  {
    id: "National Museum of Qatar",
    source: require("../../../images/Asia/catar1.jpg"),
    title: "National Museum of Qatar",
    carousel: [
      { img: require("../../../images/Asia/national1.jpg") },
      { img: require("../../../images/Asia/national2.jpg") },
      { img: require("../../../images/Asia/national3.jpg") },
      { img: require("../../../images/Asia/national4.jpg") },
      { img: require("../../../images/Asia/national5.jpg") },
    ],
  },
  {
    id: "Villagio Mall",
    source: require("../../../images/Asia/catar2.jpg"),
    title: "Villaggio Mall",
    carousel: [
      { img: require("../../../images/Asia/villagio8.png") },
      { img: require("../../../images/Asia/villaggio2.jpg") },
      { img: require("../../../images/Asia/villaggio3.jpg") },
      { img: require("../../../images/Asia/villaggio4.jpg") },
      { img: require("../../../images/Asia/villaggio5.jpg") },
    ],
  },
  {
    id: "Qatar national library",
    source: require("../../../images/Asia/catar3.jpg"),
    title: "Qatar National Library",
    carousel: [
      { img: require("../../../images/Asia/livraria1.jpg") },
      { img: require("../../../images/Asia/livraria2.jpg") },
      { img: require("../../../images/Asia/livraria3.jpg") },
      { img: require("../../../images/Asia/livraria4.jpg") },
      { img: require("../../../images/Asia/livraria5.jpg") },
    ],
  },
  {
    id: "Sealine Beach Mesaieed",
    source: require("../../../images/Asia/catar4.jpg"),
    title: "Sealine Beach, Mesaieed",
    carousel: [
      { img: require("../../../images/Asia/beach1.jpg") },
      { img: require("../../../images/Asia/beach2.jpg") },
      { img: require("../../../images/Asia/beach3.jpg") },
      { img: require("../../../images/Asia/beach4.jpg") },
    ],
  },
  {
    id: "Lusail Winter Wonderland",
    source: require("../../../images/Asia/catar5.jpg"),
    title: "Lusail Winter Wonderland",
    carousel: [
      { img: require("../../../images/Asia/lusail1.jpg") },
      { img: require("../../../images/Asia/lusail7.jpg") },
      { img: require("../../../images/Asia/lusail3.jpg") },
      { img: require("../../../images/Asia/lusail4.jpg") },
      { img: require("../../../images/Asia/lusail5.jpg") },
    ],
  },
];

const Catar = () => {
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
        source={require("../../../images/Asia/catar.jpg")}
        blurRadius={5}
      >
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
          <Bandeira pais="QA" />
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
                    navigation.navigate("DescriptionPage", {
                      id: item.id,
                      carousel: item.carousel,
                    })
                  }
                >
                  <View style={stylesPaises.flatlistImageContainer}>
                    <Image
                      source={item.source}
                      style={stylesPaises.flatlistImage}
                    />
                  </View>
                  <Text style={stylesPaises.flatlistTitle}>{item.title}</Text>
                </Pressable>
              </Animated.View>
            );
          }}
        />
      </ImageBackground>
    </View>
  );
};

export default Catar;