import {Link} from 'react-router-dom'

function Home(props) {
    return (
        <div className="">
            <div className="row iconsRow">
                <Link to="/run" className="one-third column routeIcon" id="run"><p >Run</p></Link>
                <Link to="/hike" className="one-third column routeIcon" id="hike"><p>Hike</p></Link>
                <Link to="/scenic" className="one-third column routeIcon" id="scenic"><p>Walk</p></Link>
                <p className="twelve columns instruction">Choose An Excursion</p>
                <div className="twelve columns descContainer">
                        <p className="description">Welcome to On The Run! A collaborative effort between people in motion, to share their favorite routes around the world.</p>
                    </div>
                </div>
            </div>
    )
}

export default Home