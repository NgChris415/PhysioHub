import { ExerciseCard } from "./exercise_card";

export const AnklePainCard = () => {
    const anklePainInfo = {
        bodyRegion: "Ankle Pain",
        bodyRegionInfo:
            "Ankle pain is very common among people of all ages and backgrounds, muscle strains, ligament sprains, meniscal injuries, overuse injuries can limit daily functional/recreational activities. Here is a introductory program to manage your Ankle pain.",
        exerciseList: [
            "Quad Stretch (Sets: 2 Hold: 30s Daily: 2)",
            "Hamstring Stretch (Sets: 2 Hold: 30s Daily: 2)",
            "Gastroc Stretch (Sets: 2 Hold: 30s Daily: 2)",
            "Terminal Knee Extension (Sets: 3 Reps: 10 Hold: 5s Daily: 1)",
            "Wall Squat (Sets: 3 Hold:20-30s Daily: 1)",
            "Bridge (Sets: 3 Reps: 10 Hold: 5s Daily: 1)",
        ],
        youtubePlaylist: "https://www.youtube.com",
    };
    return <ExerciseCard {...anklePainInfo} />;
};
