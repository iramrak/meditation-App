export interface MeditationType {
    id: number;
    title: string;
    image: string;
    description?: string;
    audio: string;
}

export const MEDITATION_DATA: MeditationType[] = [
    {
        id: 1,
        title: "Горы ⛰",
        description: "Погрузись в тишину величественных гор, ощущая их силу и спокойствие с каждым вдохом",
        image: "trees.webp",
        audio: "trees.mp3",
    },
    {
        id: 2,
        title: "Реки 🌊",
        description: "Позволь течению реки унести все тревоги, успокаивая ум и душу в гармонии с природой.",
        image: "river.webp",
        audio: "river.mp3",
    },
    {
        id: 3,
        title: "Закат 🌄",
        image: "meditate-under-tree.webp",
        description: "Наслаждайся мягким светом заката, растворяясь в моменте и наполняясь теплом уходящего дня",
        audio: "meditate-under-tree.mp3",
    },
    {
        id: 4,
        title: "Пляжи ⛱",
        image: "beach.webp",
        description: "Ощути мягкий бриз на берегу, где волны нежно омывают песок, даря ощущение свободы и покоя",
        audio: "beach.mp3",
    },
    {
        id: 5,
        title: "Звездная ночь 🌃",
        image: "yosemite-stars.webp",
        description: "Под светом звёзд найди своё внутреннее пространство для размышлений и полного умиротворения",
        audio: "yosemite-stars.mp3",
    },
    {
        id: 6,
        title: "Водопад 💧",
        image: "waterfall.webp",
        description: "Слушай шум водопада, который омывает твои мысли и приносит свежесть ясного ума",
        audio: "waterfall.mp3",
    },
];

export const AUDIO_FILES: { [key: string]: any } = {
    "trees.mp3": require("@/assets/audio/trees.mp3"),
    "river.mp3": require("@/assets/audio/river.mp3"),
    "meditate-under-tree.mp3": require("@/assets/audio/meditate-under-tree.mp3"),
    "beach.mp3": require("@/assets/audio/beach.mp3"),
    "yosemite-stars.mp3": require("@/assets/audio/yosemite-stars.mp3"),
    "waterfall.mp3": require("@/assets/audio/waterfall.mp3"),
};