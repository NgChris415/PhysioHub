export const AdditionalInfoCard = (props: {
    additionalInfoTitle: string;
    additionalInfoBody: string;
    additionalInfoImage: string;
}) => {
    return (
        <div className="additional-info-container">
            <h2 className="additional-info-title">
                {props.additionalInfoTitle}
            </h2>
            <div className="additional-info-body">
                <div className="additional-info-body-left">
                    <img
                        className="icons"
                        src={props.additionalInfoImage}
                        alt=""
                    />
                </div>
                <div className="additional-info-body-right">
                    <p>{props.additionalInfoBody}</p>
                </div>
            </div>
        </div>
    );
};
