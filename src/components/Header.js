import {Link} from 'react-router-dom'
import Navbar from './Nav/Navbar'

function Header(props) {
    return (
        <nav>
            {/* <Link to="/" style={{textDecoration: 'none'}}>
                <div className="navItem">Home</div>
            </Link>
            <Link to="/run" style={{textDecoration: 'none'}}>
                <div className="navItem">Run</div>
            </Link>
            <Link to="/hike" style={{textDecoration: 'none'}}>
                <div className="navItem">Hike</div>
            </Link>
            <Link to="/scenic" style={{textDecoration: 'none'}}>
                <div className="navItem">Walk</div>
            </Link> */}
            <Navbar />
        </nav>
    )
}

export default Header

// className="nav"