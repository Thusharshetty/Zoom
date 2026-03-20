import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <nav>
            <div className='navHeader'>
                <Link to="/">
                    <h2>Apna Vedio Call</h2>
                </Link>

            </div>
            <div className='navList'>
                <Link to="/"><p>Join as Guest</p></Link>
                <Link to="/register"><p>Register</p></Link>
                <Link to="/login"><div role="button">Login</div></Link>
            </div>
        </nav>
    )
}       