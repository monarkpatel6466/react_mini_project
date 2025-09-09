import { Link } from 'react-router'

export default function Features(){
    return(
        <div className="features-page">
            <div className="features-section">
                <div className="container">
                    <h2>Features</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has been the industry's standard dummy text.</p>
                    <br/><br/>
                    <div className="cards">
                        <div className="card">
                            <h3>Color Mixture</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <br/><br/>
                            <Link className="primary-btn" to="/feature/color-mixture">Learn More</Link>
                            <br/><br/>
                        </div>
                        <div className="card">
                            <h3>Accordian</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <br/><br/>
                            <Link className="primary-btn" to="/feature/faqs">Learn More</Link>
                            <br/><br/>
                        </div>
                        <div className="card">
                            <h3>use API</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <br/><br/>
                            <Link className="primary-btn" to="/feature/users">Learn More</Link>
                            <br/><br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}