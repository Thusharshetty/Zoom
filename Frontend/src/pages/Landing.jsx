import '../App.css';
import { Link } from 'react-router-dom';

export default function Landing() {
    return (
        <div className="landingPageContainer">
            <nav>
                <div className='navHeader'>
                    <h2>Apna Vedio Call</h2>

                </div>
                <div className='navList'>
                    <p>Join as Guest</p>
                    <p>Register</p>
                    <div role="button">Login</div>
                </div>
            </nav>

            <div className="landingMainConatiner">
                <div>
                    <h1><span style={{ color: "#FF9839" }}>Connect</span> With Your Loved Ones </h1>
                    <p>Cover a distance by Apna Vedio Call</p>
                    <button>
                        <Link to="/home">Get Started</Link>
                    </button>
                </div>
                <div className='landingMainRight'>
                    <img src="/mobile.png" alt="" />
                </div>
            </div>
        </div>
    )
}