import { Link } from "react-router"

export default function PageNotFound(){
    return(
        <div className="not-found-page">
            <div className="container">
                <h1>404</h1>
                <h2>Page not found</h2>
                <Link className="primary-btn" to="/">Back to Home</Link>
            </div>
        </div>
    );
}