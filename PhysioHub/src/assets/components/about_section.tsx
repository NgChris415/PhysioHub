import { AdditionalInfoCard } from "./additional_info_card";

export const AboutCard = () => {
    const aboutCardInfo = {
        additionalInfoTitle: "About Me",
        additionalInfoBody:
            "Hello, I'm Chris, a licensed Physical Therapist and aspiring Software Engineer/Developer. My passion lies in leveraging my coding skills to tackle healthcare access challenges and curb unnecessary referrals. I'm dedicated to developing user-friendly solutions for greater accessibility and efficiency in the Healthcare system. I aim to showcase my technical abilities in the coding space as I continue to grow as a developer. This page was created using vite, TypeScript, React, CSS, HTML. Thank you for stopping by!",
        additionalInfoImage: "/assets/images/profilepic.jpeg",
    };
    return <AdditionalInfoCard {...aboutCardInfo} />;
};
