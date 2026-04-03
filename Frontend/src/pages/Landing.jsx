import '../App.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


export default function Landing() {
    return (
        <div className="landingPageContainer">
            <Navbar />
            <div className="landingMainConatiner">
                <div>
                    <h1><span style={{ color: "#FF9839" }}>Connect</span> With Your Loved Ones </h1>
                    <p>Cover a distance by Apna Video Call</p>
                    <Link to="/login">
                        <button>Get Started</button>
                    </Link>
                </div>
                <div className='landingMainRight'>
                  <div className="themedImageContainer">
                        <img src="/mainLogo.jpg" alt="Connect Illustration" />
                    </div>
                </div>
            </div>
        </div>
    )
}