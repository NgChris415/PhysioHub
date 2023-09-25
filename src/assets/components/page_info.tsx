export const PageInfo = (props: {
    pageTitle: string;
    pageInfo: string;
    pageInstructions: string;
}) => {
    return (
        <div className="page-info">
            <h2 className="page-title">{props.pageTitle}</h2>
            <p>{props.pageInfo}</p>
            <p>{props.pageInstructions}</p>
        </div>
    );
};
