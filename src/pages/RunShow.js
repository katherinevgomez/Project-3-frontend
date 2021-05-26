import { useState } from "react";
import { Redirect } from "react-router-dom";
import MapLoader from "../components/Map/MapLoader";

function Show(props) {
    const processDelete = (event, id) => {
        event.preventDefault();
        props.deleteRun(id);
        props.history.push("/run");
    };

    const processUpdate = (event, originalRun, id) => {
        event.preventDefault();
        props.updateRun({ ...originalRun, ...editForm }, id);
    };

    const [editForm, setEditForm] = useState(null);

    const handleChange = (event) => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value });
    };

    const loaded = () => {
        const run = props.runs.filter(
            (r) => r._id === props.match.params.id
        )[0];
        return typeof run === "undefined" ? (
            <Redirect to="/" />
        ) : (
            <>
                {/* hot display of details */}
                <section className="container showPage">
                    <div className="row twelve columns showImage" style={{marginBottom: '10px'}}>
                        {run.image ? (
                            <img
                                src={run.image}
                                style={{ maxWidth: "500px", maxHeight: "500px" }}
                                alt={
                                    typeof editForm?.title === "string"
                                        ? editForm.title
                                        : run.title
                                }
                            />
                        ) : (
                            <h6>no image to display</h6>
                        )}
                    </div>
                    <div className="row twelve columns" style={{marginBottom: '50px'}}>
                        <p>Posted by:</p>
                        {run.name ? (
                            <h5>
                                {typeof editForm?.name === "string"
                                    ? editForm.name
                                    : run.name}
                            </h5>
                        ) : (
                            <h6>no name to display</h6>
                        )}
                    </div>
                    <div className="row twelve columns" style={{height: '200px'}}>
                        <div className="six columns showTitle">
                            <p>Excursion Title:</p>
                            {run.title ? (
                                <h3>
                                    {typeof editForm?.title === "string"
                                        ? editForm.title
                                        : run.title}
                                </h3>
                            ) : (
                                <h6>no title to display</h6>
                            )}
                        </div>
                        <div className="six columns showDistance">
                            <p>Distance of Route:</p>
                            {run.distance ? (
                                <h4>
                                    {typeof editForm?.distance === "string"
                                        ? editForm.distance
                                        : run.distance}
                                </h4>
                            ) : (
                                <h6>no distance to display</h6>
                            )}
                        </div>
                    </div>
                    <div className="row twelve columns" style={{height: '200px', marginBottom: '200px'}}>
                        <div className="six columns showLocation">
                            <p>Location:</p>
                            {run.location && run.location !== "" ? (
                                <h4>
                                    {typeof editForm?.location === "string" ? (
                                        <div>
                                            <h4>{editForm.location}</h4>
                                            <MapLoader
                                                location={editForm.location}
                                            ></MapLoader>
                                        </div>
                                    ) : (
                                        <div>
                                            <h4>{run.location}</h4>
                                            <MapLoader
                                                location={run.location}
                                            ></MapLoader>
                                        </div>
                                    )}
                                </h4>
                            ) : (
                                <h6>no location to display</h6>
                            )}
                        </div>
                        <div className="six columns">
                            <p>User Difficulty:</p>
                            {run.difficulty ? (
                                <h4>
                                    {typeof editForm?.difficulty === "string"
                                        ? editForm.difficulty
                                        : run.difficulty}
                                </h4>
                            ) : (
                                <h6>no difficulty to display</h6>
                            )}
                        </div>
                    </div>
                    
                </section>
                {/* edit form */}
                <section className="container showUpdate" style={{marginTop: '25px'}}>
                    <form className="twelve columns" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}
                        onChange={(event) => handleChange(event)}
                        onSubmit={(event) => processUpdate(event, run, run._id)}
                    >
                        <div className="row twelve columns">
                            <div className="six columns" style={{marginTop:'15px'}}>
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="title"
                                    value={
                                        typeof editForm?.title === "string"
                                            ? editForm.title
                                            : run.title
                                    }
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="six columns">
                                <label htmlFor="image">Image</label>
                                <input
                                    type="text"
                                    name="image"
                                    placeholder="image url"
                                    value={
                                        typeof editForm?.image === "string"
                                            ? editForm.image
                                            : run.image
                                    }
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="six columns">
                                <label htmlFor="distance">Distance</label>
                                <input
                                    type="text"
                                    name="distance"
                                    placeholder="distance"
                                    value={
                                        typeof editForm?.distance === "string"
                                            ? editForm.distance
                                            : run.distance
                                    }
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="six columns">
                                <label htmlFor="location">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    placeholder="location"
                                    value={
                                        typeof editForm?.location === "string"
                                            ? editForm.location
                                            : run.location
                                    }
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="six columns">
                                <label htmlFor="difficulty">Difficulty Level</label>
                                <select style={{width: '190px'}}
                                    type="text"
                                    name="difficulty"
                                    value={
                                        typeof editForm?.difficulty === "string"
                                            ? editForm.difficulty
                                            : run.difficulty
                                            ? run.difficulty
                                            : ""
                                    }
                                    onChange={handleChange}
                                >
                                    {" "}
                                    <option value=""></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                            <div className="six columns">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="name"
                                    value={
                                        typeof editForm?.name === "string"
                                            ? editForm.name
                                            : run.name
                                    }
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <button className="three columns updateSubmit" type="submit">Save Updates</button>
                        </div>
                    </form>
                </section>

                {/* delete button */}
                <section style={{textAlign: 'center'}}>
                    <form onSubmit={(event) => processDelete(event, run._id)}>
                        <button className="delete-button" type="submit">
                            Delete Run
                        </button>
                    </form>
                </section>
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

