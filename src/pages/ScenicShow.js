import { useState } from "react";
import { Redirect } from "react-router-dom";
import MapLoader from "../components/Map/MapLoader";

function Show(props) {
    const processDelete = (event, id) => {
        event.preventDefault();
        props.deleteWalk(id);
        props.history.push("/scenic");
    };

    const processUpdate = (event, originalWalk, id) => {
        event.preventDefault();
        props.updateWalk({ ...originalWalk, ...editForm }, id);
    };

    const [editForm, setEditForm] = useState(null);

    const handleChange = (event) => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value });
    };

    const loaded = () => {
        const walk = props.walks.all_walks.filter(
            (r) => r._id === props.match.params.id
        )[0];
        return typeof walk === "undefined" ? (
            <Redirect to="/" />
        ) : (
            <>
                {/* hot display of details */}
                <section className="container showPage">
                    <div
                        className="row twelve columns"
                        style={{ marginBottom: "10px" }}
                    >
                        {walk.image ? (
                            <img
                                id="showImage"
                                src={walk.image}
                                style={{
                                    maxWidth: "800px",
                                    maxHeight: "800px",
                                }}
                                alt={
                                    typeof editForm?.title === "string"
                                        ? editForm.title
                                        : walk.title
                                }
                            />
                        ) : (
                            <h6>no image to display</h6>
                        )}
                    </div>
                    <div
                        className="row twelve columns"
                        id="showName"
                        style={{ marginBottom: "50px" }}
                    >
                        <p>Posted by:</p>
                        {walk.name ? (
                            <h5>
                                {typeof editForm?.name === "string"
                                    ? editForm.name
                                    : walk.name}
                            </h5>
                        ) : (
                            <h6>no name to display</h6>
                        )}
                    </div>
                    <div
                        className="row twelve columns"
                        style={{ height: "200px", marginBottom:'20px' }}
                    >
                        <div className="six columns showTitle" id="showTitle">
                            <p>Title:</p>
                            {walk.title ? (
                                <h3>
                                    {typeof editForm?.title === "string"
                                        ? editForm.title
                                        : walk.title}
                                </h3>
                            ) : (
                                <h6>no title to display</h6>
                            )}
                        </div>
                        <div className="six columns showDistance" id="showDistance">
                            <p>Distance of Route:</p>
                            {walk.distance ? (
                                <h4>
                                    {typeof editForm?.distance === "string"
                                        ? editForm.distance
                                        : walk.distance}
                                </h4>
                            ) : (
                                <h6>no distance to display</h6>
                            )}
                        </div>
                    </div>
                    <div
                        className="row twelve columns"
                        style={{ height: "200px" }}
                    >
                        {/* <div className="six columns showDifficulty">
                            <p>User Difficulty:</p>
                            {walk.difficulty ? (
                                <h4>
                                    {typeof editForm?.difficulty === "string"
                                        ? editForm.difficulty
                                        : walk.difficulty}
                                </h4>
                            ) : (
                                <h6>no difficulty to display</h6>
                            )}
                        </div> */}
                        <div className="twelve columns showLocation" id="showWalkLocation">
                            <p>Location:</p>
                            {walk.location && walk.location !== "" ? (
                                <h4>
                                    {typeof editForm?.location === "string"
                                        ? editForm.location
                                        : walk.location}
                                </h4>
                            ) : (
                                <h6>no location to display</h6>
                            )}
                        </div>
                    </div>
                    {walk.location && walk.location !== "" ? (
                        typeof editForm?.location === "string" ? (
                            <div
                                className="row twelve columns"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <h4>
                                    <div>
                                        <MapLoader
                                            location={editForm.location}
                                        ></MapLoader>
                                    </div>
                                </h4>
                            </div>
                        ) : (
                            <div
                                className="row twelve columns"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <h4>
                                    <div>
                                        <MapLoader
                                            location={walk.location}
                                        ></MapLoader>
                                    </div>
                                </h4>
                            </div>
                        )
                    ) : null}
                </section>
                {props.walks.user_created.includes(walk._id) ? (
                    <>
                        <h3
                            style={{
                                textAlign: "center",
                                marginTop: "25px",
                                fontWeight: "600",
                            }}
                        >
                            Update Post Information
                        </h3>
                        {/* edit form */}
                        <section
                            className="container showUpdate"
                            style={{ marginTop: "25px" }}
                        >
                            <form
                                className="twelve columns"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                                onChange={(event) => handleChange(event)}
                                onSubmit={(event) =>
                                    processUpdate(event, walk, walk._id)
                                }
                            >
                                <div
                                    className="row twelve columns"
                                    style={{ marginTop: "15px" }}
                                >
                                    <div className="six columns">
                                        <label htmlFor="title">Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            placeholder="title"
                                            value={
                                                typeof editForm?.title ===
                                                "string"
                                                    ? editForm.title
                                                    : walk.title
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
                                                typeof editForm?.image ===
                                                "string"
                                                    ? editForm.image
                                                    : walk.image
                                            }
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="six columns">
                                        <label htmlFor="distance">
                                            Distance
                                        </label>
                                        <input
                                            type="text"
                                            name="distance"
                                            placeholder="distance"
                                            value={
                                                typeof editForm?.distance ===
                                                "string"
                                                    ? editForm.distance
                                                    : walk.distance
                                            }
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="six columns">
                                        <label htmlFor="location">
                                            Location
                                        </label>
                                        <input
                                            type="text"
                                            name="location"
                                            placeholder="location"
                                            value={
                                                typeof editForm?.location ===
                                                "string"
                                                    ? editForm.location
                                                    : walk.location
                                            }
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    {/* {                            <div className="six columns">
                                    <label htmlFor="difficulty">
                                        Difficulty Level
                                    </label>
                                    <select
                                        style={{ width: "190px" }}
                                        type="text"
                                        name="difficulty"
                                        value={
                                            typeof editForm?.difficulty === "string"
                                                ? editForm.difficulty
                                                : walk.difficulty
                                                ? walk.difficulty
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
                                </div>} */}
                                    <div className="twelve columns">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="name"
                                            value={
                                                typeof editForm?.name ===
                                                "string"
                                                    ? editForm.name
                                                    : walk.name
                                            }
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <button
                                        className="updateBtn"
                                        style={{ backgroundColor: "white" }}
                                        type="submit"
                                    >
                                        Save Updates
                                    </button>
                                </div>
                            </form>
                        </section>
                        {/* delete button */}
                        <section style={{ textAlign: "center" }}>
                            <form
                                onSubmit={(event) =>
                                    processDelete(event, walk._id)
                                }
                            >
                                <button className="delete-button" type="submit">
                                    Delete Walk
                                </button>
                            </form>
                        </section>
                    </>
                ) : null}
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