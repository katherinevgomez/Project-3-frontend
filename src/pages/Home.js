import {Link} from 'react-router-dom'

function Home(props) {
    return (
        <div className="container">
            <div className="row iconsRow">
                <Link to="/run" className="one-third column routeIcon" id="run"><p >Run</p></Link>
                <Link to="/hike" className="one-third column routeIcon" id="hike"><p>Hike</p></Link>
                <Link to="/scenic" className="one-third column routeIcon" id="scenic"><p>Scenic Walk</p></Link>
                <p className="twelve columns instruction">Please Choose An Excursion</p>
                <p className="twelve columns description">Welcome to "insert name here"! A collaborative effort bewteen people in motion, to share their favorite routes around the world.</p>
            </div>
        </div>
    )
}

export default Home