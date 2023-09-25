import { ExerciseCard } from "./exercise_card";

export const ShoulderPainCard = () => {
    const shoulderPainInfo = {
        bodyRegion: "Shoulder Pain",
        bodyRegionInfo:
            "Shoulder pain is a common issue affecting individuals of all ages and backgrounds. Muscle strains, ligament sprains, rotator cuff injuries, and overuse problems can significantly restrict your daily functional and recreational activities. Here's an introductory program to help you manage your shoulder pain.",
        exerciseList: [
            "Wall Shoulder Flexion (Sets: 2 Hold: 30s Daily: 2)",
            "Wall Shoulder Abduction (Sets: 2 Hold: 30s Daily: 2)",
            "Doorway Pec Stretch (Sets: 2 Hold: 30s Daily: 2)",
            "Scapular Retraction w/ Band (Sets: 2 Reps: 10 Hold: 5s Daily: 1)",
            "Theraband Row (Sets: 2 Reps: 10 Hold: 5s Daily: 1)",
        ],
        youtubePlaylist: "https://www.youtube.com",
    };
    return <ExerciseCard {...shoulderPainInfo} />;
};
