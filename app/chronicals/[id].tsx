import { StyleSheet, Text, View, Image, Animated } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const IMAGE_COUNT = 68;
const images = [
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716659/__0_Logo_xzjojx.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716658/_0_init_f18iio.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716659/_0_1_eqbo5g.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716660/_0_init1_vb8wxw.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716660/_1_iewuvp.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716660/_9_1_eozmmd.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716660/_9_2_kq0lek.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716660/_9_3_u1afop.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716661/_4_vcnrfp.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716661/_10_1_qv69iq.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716661/_3_sxinnj.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716661/_2_smtb9o.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716661/_10_bmpqc8.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716661/_5_py5kca.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716662/_7_1_r2oel7.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716662/_7_bbkwjv.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716662/_10_2_xkbf7e.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716662/_6_q1pcuf.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716662/_10_3_vxuotj.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716662/_8_ss4wdj.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716662/_10_3_1_ze2zb7.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716662/_9_ifutex.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716663/_10_4_r2corn.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716663/_10_5_ts9prs.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716663/_10_6_otqmym.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716663/_11_2_jmyjjy.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716663/_11_gkugxv.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716663/_11_3_nyz0fp.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716663/_12_tlpplc.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716663/_11_1_vaa1tx.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716664/_13_tszqqj.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716664/_13_2_djxtk6.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716664/_13_1_rko4bw.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716664/_13_2_2_ghfyfz.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716664/_13_2_1_ddgjmt.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716665/_13_5_crj5xd.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716665/_13_4_jncvgw.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716665/_13_3_hioith.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716665/_13_6_klkq5t.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716665/_14_zqpwyn.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716666/_15_1_twzuhh.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716666/_15_3_arw3lv.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716666/_15_mmkcqs.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716666/_15_2_dchqx1.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716666/_15_5_khes9v.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716666/_15_6_dekcuo.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716666/_15_4_dj7omm.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716667/_15_7_ws2xhv.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716667/_15_8_gpcsbk.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716667/_15_9_wtciqv.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716667/_16_0_khznbi.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716667/_16_2_bmht0j.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716667/_17_gxvf2j.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716667/_16_1_anrdkl.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716668/_17_1_sklkzd.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716668/_17_2_hcm98s.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716674/_18_1_zxjxjv.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716674/_18_2_ysu72e.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716674/_18_3_sklztf.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716674/_18_5_jlh8eh.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716674/_18_wcsw0f.gif",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716674/_18_4_dipz86.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716674/_18_6_pst89t.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716675/_18_7_kmogtd.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716675/_18_8_dzcpgu.png",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716675/_19_1_ty2mjq.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716675/_19_yefixw.jpg",
  "https://res.cloudinary.com/ddb8qrjvx/image/upload/v1741716675/_19_3_em8tjd.jpg",
];

const Chronicals = () => {
  const { id } = useLocalSearchParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const startFadeAnimation = () => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      startFadeAnimation();
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGE_COUNT);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LinearGradient colors={["#FF8C00", "#FF4500"]} style={styles.container}>
      <Text style={styles.title}>
        {id == 1 ? "The Ramayana" : "The Mahabharata"}
      </Text>
      <View>
        <Text style={styles.title}>{currentIndex + 1}</Text>
      </View>
      <View style={styles.sliderBox}>
        <Animated.Image
          source={{ uri: images[currentIndex] }}
          style={[styles.sliderImage, { opacity: fadeAnim }]}
        />
      </View>
    </LinearGradient>
  );
};

export default Chronicals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 20,
  },
  sliderBox: {
    width: 350,
    height: 300,
    borderRadius: 15,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "white",
    alignItems: "center", // Centers the image
    justifyContent: "center",
    backgroundColor: "white", // Adds a background for better visibility
  },
  sliderImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain", // Ensures the whole image is visible without cropping
  },
});
