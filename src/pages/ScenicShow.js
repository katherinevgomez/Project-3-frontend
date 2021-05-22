import { Redirect } from "react-router-dom";
import MapLoader from "../components/Map/MapLoader";

function Show(props) {
    const loaded = () => {
        const walk = props.walks.filter(
            (r) => r._id === props.match.params.id
        )[0];
        return typeof walk === "undefined" ? (
            <Redirect to="/" />
        ) : (
            <>
                <div>{/* show everything but location */}</div>
                {/* show location below */}
                <div>
                    <h6>{walk.title} location shown below on the map </h6>
                    <MapLoader location={walk.location}></MapLoader>
                </div>
            </>
        );
    };

    const loading = () => {
        // waiting for api call to db (perhaps on refresh)
        return <h6>loading walk with ID: {props.match.params.id}</h6>;
    };

    return props.walks ? loaded() : loading();
}

export default Show;
