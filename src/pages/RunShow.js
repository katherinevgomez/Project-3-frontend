import { Redirect } from "react-router-dom";
import MapLoader from "../components/Map/MapLoader";

function Show(props) {
    const processDelete = (event, id) => {
        event.preventDefault();
        props.deleteRun(id);
        props.history.push("/run");
    };

    const loaded = () => {
        const run = props.runs.filter(
            (r) => r._id === props.match.params.id
        )[0];
        return typeof run === "undefined" ? (
            <Redirect to="/" />
        ) : (
            <>
                <div>{/* show everything but location */}</div>
                {/* show location below */}
                <div>
                    <h6>{run.title} location shown below on the map </h6>
                    <MapLoader location={run.location}></MapLoader>
                </div>
                <form onSubmit={(event) => processDelete(event, run._id)}>
                    <button className="delete-button" type="submit">
                        Delete Run
                    </button>
                </form>
            </>
        );
    };

    const loading = () => {
        // waiting for api call to db (perhaps on refresh)
        return <h6>loading run with ID: {props.match.params.id}</h6>;
    };

    return props.runs ? loaded() : loading();
}

export default Show;
