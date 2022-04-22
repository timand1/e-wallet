import './Top.css';

function Top(props) {
    const { headLine, subHeadLine } = props;

    return (
        <header className="header">
            <h1>{headLine}</h1>
            <p>{subHeadLine}</p>
        </header>
    )
}

export default Top;