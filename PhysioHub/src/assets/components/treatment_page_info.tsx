import { PageInfo } from "./page_info";

export const TreatmentPageInfo = () => {
    const displayPageInfo = {
        pageTitle: "Treatments",
        pageInfo:
            "Engage in a general exercise routines for various pains. If any exercises exacerbate discomfort, refrain from those particular exercises until your symptoms show signs of improvement. If the pain persists without improvement for a duration of 2-3 weeks, consider seeking advice from a healthcare professional, such as your Doctor or a Physical Therapist.",
        pageInstructions:
            "Click on Home exercise button to reveal exercises for each body region, a link will be provided to a youtube playlist on how to perform each exercise!",
    };
    return <PageInfo {...displayPageInfo} />;
};
