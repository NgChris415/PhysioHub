import { useState } from "react";
import { FaYoutube } from "react-icons/fa";

export const ExerciseCard = (props: {
    bodyRegion: string;
    bodyRegionInfo: string;
    exerciseList: string[];
    youtubePlaylist: string;
}) => {
    const [displayInfo, setDisplayInfo] = useState(false);
    const displayInfoButton = () => {
        setDisplayInfo(!displayInfo);
    };

    return (
        <div>
            <div className="exercise-card">
                <h4 className="body-region">{props.bodyRegion}</h4>
                <p className="body-region-info">{props.bodyRegionInfo}</p>
                <button
                    onClick={displayInfoButton}
                    className="drop-down-button"
                >
                    Home Exercise Program
                </button>
                {displayInfo && (
                    <div className="exercise-program">
                        <h2>Home Exercise Program</h2>
                        <ul className="exercise-list">
                            {props.exerciseList.map((data) => {
                                return <li key={data}>{data}</li>;
                            })}
                        </ul>
                        <a
                            href={props.youtubePlaylist}
                            className="youtube-button"
                        >
                            <FaYoutube color="white" size="30" />
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};
