import { useNavigate } from 'react-router-dom';

function ErrorPage() {
    const navigate = useNavigate();
    return (
        <section>
            <h1>404</h1>
            <button className="button" onClick={navigate('/')}>Take me back</button>
        </section>
    )
}

export default ErrorPage;