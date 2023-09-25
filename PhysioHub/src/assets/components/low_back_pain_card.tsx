import { ExerciseCard } from "./exercise_card";

export const LowBackPainCard = () => {
    const lowBackPainInfo = {
        bodyRegion: "Low back Pain",
        bodyRegionInfo:
            "Low back pain can take different forms, including muscle strains, mechanical joint problems, and nerve-related issues like lumbar radiculopathy and sciatica. This routine serves as a helpful initial program for pain management.",
        exerciseList: [
            "Lower Trunk Rotation (Sets: 2 Reps: 10 Daily: 2)",
            "Single Knee To Chest (Sets: 2 Hold: 30s Daily: 2)",
            "Piriformis Stretch (Sets: 2 Hold: 30s Daily: 2)",
            "Seated Trunk Flexion (Sets: 2 Hold: 30s Daily: 2)",
            "Bridge (Sets: 2 Reps: 10 Hold: 5s Daily: 2)",
            "Prone Press Up (Sets: 2 Reps: 10 Hold: 5s Daily: 2)",
        ],
        youtubePlaylist: "https://www.youtube.com",
    };
    return <ExerciseCard {...lowBackPainInfo} />;
};
