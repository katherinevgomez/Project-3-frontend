import {Link} from 'react-router-dom'

function Header(props) {
    return (
        <nav className="nav">
            <Link to="/" style={{textDecoration: 'none'}}>
                <div className="navItem">Home</div>
            </Link>
            <Link to="/run" style={{textDecoration: 'none'}}>
                <div className="navItem">Run</div>
            </Link>
            <Link to="/hike" style={{textDecoration: 'none'}}>
                <div className="navItem">Hike</div>
            </Link>
            <Link to="/scenic" style={{textDecoration: 'none'}}>
                <div className="navItem">Scenic</div>
            </Link>
        </nav>
    )
}

export default Header