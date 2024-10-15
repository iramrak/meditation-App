import GuidedAffirmationsGallery from "@/components/GuidedAffirmationsGallery";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallary";
import images from "@/constants/affirmation-images";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Page = () => {
    const insets = useSafeAreaInsets();

    return (
        <View className="flex-1 mt-4">
            <LinearGradient
                // Background Linear Gradient
                colors={["#f1f1f1", "#f2f2f2", "#f3f3f3"]}
                className="px-5"
                style={{ paddingTop: insets.top }}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text className='text-zinc-900 mb-2 font-bold text-2xl text-left leading-7'>Начни свой день с вдохновения и уверенности</Text>
                    <Text className='text-black/80 font-normal text-lg text-left leading-5 pr-5'>Читай вдохновляющие статьи и открывай новые горизонты!🍃</Text>
                    <View>
                        {AFFIRMATION_GALLERY.map((g) => (
                            <GuidedAffirmationsGallery
                                key={g.title}
                                title={g.title}
                                products={g.data}
                            />
                        ))}
                    </View>
                </ScrollView>
            </LinearGradient>
            <StatusBar style="dark" />
        </View>
    );
};


export default Page;
