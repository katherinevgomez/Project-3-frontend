import { Redirect } from "react-router-dom";
import MapLoader from "../components/Map/MapLoader";

function Show(props) {
    const loaded = () => {
        const hike = props.hikes.filter(
            (r) => r._id === props.match.params.id
        )[0];
        return typeof hike === "undefined" ? (
            <Redirect to="/" />
        ) : (
            <>
                <div>{/* show everything but location */}</div>
                {/* show location below */}
                <div>
                    <h6>{hike.title} location shown below on the map </h6>
                    <MapLoader location={hike.location}></MapLoader>
                </div>
            </>
        );
    };

    const loading = () => {
        // waiting for api call to db (perhaps on refresh)
        return <h6>loading hike with ID: {props.match.params.id}</h6>;
    };

    return props.hikes ? loaded() : loading();
}

export default Show;
