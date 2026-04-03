import { Link, useNavigate } from "react-router-dom";


export default function Navbar() {
    const navigate=useNavigate();
    const joinAsGuest = () => {
        const randomCode = Math.random().toString(36).substring(2, 10);
        navigate(`/${randomCode}`);
    };
    return (
        <nav>
            <div className='navHeader'>
                <Link to="/">
                    <h2>Apna Video Call</h2>
                </Link>

            </div>
            <div className='navList'>
                <div onClick={joinAsGuest} style={{cursor: "pointer"}}>
                    <p>Join as Guest</p>
                </div>
                <Link to="/register"><p>Register</p></Link>
                <Link to="/login"><div role="button">Login</div></Link>
            </div>
        </nav>
    )
}       