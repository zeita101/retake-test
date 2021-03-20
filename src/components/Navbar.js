import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nvabar">
            <div className="links">
                <Link to="/">Home</Link><br>
                </br>
                <Link to="/Character">Character</Link>
                <br>
                </br>
                <Link to="/Quote">Quote</Link>

            </div>
        </nav>
    )
}

export default Navbar;