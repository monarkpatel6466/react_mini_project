import BannerImage from "./assets/images/banner.png"
import { Link } from "react-router"
import Features from "./Features"

export default function Home(){
    return(
        <div className="home-page">
            <div className="banner-section">
                <div className="container">
                    <div className="banner-content">
                        <div className="content">
                            <h1>Explore React fundamentals through mini demos.</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            <br/><br/>
                            <Link className="primary-btn" to="/features">Learn More</Link>
                        </div>
                        <div className="image">
                            <img src="/images/banner.png" alt="banner" />
                        </div>
                    </div>
                </div>
            </div>
            <Features />
        </div>
    );
}