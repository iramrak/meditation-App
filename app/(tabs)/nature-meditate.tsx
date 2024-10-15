import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import React from "react";
import {
    FlatList,
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

import MEDITATION_IMAGES from "@/constants/meditation-images";

import { MEDITATION_DATA, MeditationType } from "@/constants/MeditationData";
import AppGradient from "@/components/AppGradient";

const Page = () => {
    return (
        <View className="flex-1">
            <AppGradient
                // Background Linear Gradient
                colors={["#f1f1f1", "#f2f2f2", "#f3f3f3"]}
            >
                <View className="mb-6">
                    <Text className='text-gray-900 mb-2 font-bold text-2xl text-left'>Приветствуем в CalmMind!</Text>
                    <Text className='text-black/80 font-normal text-lg text-left leading-5 pr-5'>Начинай практики и находи внутренний покой!🌱</Text>
                </View>
                <View>
                    <FlatList
                        data={MEDITATION_DATA}
                        contentContainerStyle={styles.list}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <Pressable
                                onPress={() =>
                                    router.push(`/meditate/${item.id}`)
                                }
                                className="h-48 my-3 rounded-md overflow-hidden"
                            >
                                <ImageBackground
                                    source={MEDITATION_IMAGES[item.id - 1]}
                                    resizeMode="cover"
                                    style={styles.backgroundImage}
                                >
                                    <LinearGradient
                                        // Gradient from transparent to black
                                        colors={[
                                            "transparent",
                                            "rgba(0,0,0,0.8)",
                                        ]}
                                        style={styles.gradient}
                                    >
                                        <Text className="text-gray-100 text-3xl font-bold text-center">
                                            {item.title}
                                        </Text>
                                    </LinearGradient>
                                </ImageBackground>
                            </Pressable>
                        )}
                    />
                </View>
            </AppGradient>
            <StatusBar style="dark" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        borderRadius: 10,
        justifyContent: "center",
    },
    gradient: {
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
        width: "100%",
    },
    list: {
        paddingBottom: 150,
    },
});

export default Page;
