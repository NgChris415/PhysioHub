import { AdditionalInfoCard } from "./additional_info_card";

export const DisclaimerCard = () => {
    const disclaimerInfo = {
        additionalInfoTitle: "Disclaimer",
        additionalInfoBody:
            "The information provided on this page is for informational purposes only and should not be considered as official medical advice. In case of a medical emergency, please call 911 or visit your nearest emergency room immediately. Do not delay seeking professional medical assistance based on information obtained from this page. Consult a healthcare professional for personalized guidance.",
        additionalInfoImage: "/assets/images/information.png",
    };
    return <AdditionalInfoCard {...disclaimerInfo} />;
};
