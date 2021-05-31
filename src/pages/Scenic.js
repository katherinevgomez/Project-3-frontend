import { useState } from "react";
import { Link } from "react-router-dom";
import Run from "./Run";

function Scenic(props) {
    const [newForm, setNewForm] = useState({
        title: "",
        image: "",
        distance: "",
        location: "",
        // difficulty: "",
        name: "",
    });

    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createWalks(newForm);
        setNewForm({
            title: "",
            image: "",
            distance: "",
            location: "",
            // difficulty: "",
            name: "",
        });
    };

    const loaded = () => {
        return props.walks.all_walks.map((walk) => (
            <div key={walk._id} className="one-third column scenicIcons">
                {walk.image ? (
                    <img src={walk.image} alt={walk.name} />
                ) : (
                    <div></div> // if null styling messed up
                )}
                <Link
                    to={`/scenic/${walk._id}`}
                    style={{ textDecoration: "none" }}
                >
                    <h4>{walk.title}</h4>
                </Link>
                {props.walks.user_created.includes(walk._id) ? (
                    <p>by {props.walks.username} (you)</p>
                ) : walk.name ? (
                    <p>by {walk.name}</p>
                ) : (
                    <p style={{ color: "transparent" }}>unnamed post</p> // needs to have some text for styling. i think its a nice easter egg to see the transparent text on highlight
                )}
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return (
        <section>
            <form onSubmit={handleSubmit} className=" scenicForm">
                <div className="row">
                    <h2>Post A New Walk</h2>
                </div>
                <div className="row">
                    <div className="six columns">
                        <label htmlFor="title">Walk Name</label>
                        <input
                            type="text"
                            id="title"
                            value={newForm.title}
                            name="title"
                            placeholder="Walk Name"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="six columns">
                        <label htmlFor="image">Image</label>
                        <input
                            type="text"
                            id="image"
                            value={newForm.image}
                            name="image"
                            placeholder="Image URL"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="six columns">
                        <label htmlFor="distance">Distance</label>
                        <input
                            type="text"
                            id="distance"
                            value={newForm.distance}
                            name="distance"
                            placeholder="1 Mile"
                            onChange={handleChange}
                        />
                    </div>
                    {/* <div className="six columns">
                        <label htmlFor="difficulty">Difficulty Level</label>
                        <select id="difficulty" value={newForm.difficulty} name="difficulty" onChange={handleChange}>
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
                    </div> */}
                    <div className="six columns">
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            id="location"
                            value={newForm.location}
                            name="location"
                            placeholder="City, ST"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="twelve columns">
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            value={newForm.name}
                            name="name"
                            placeholder="Your Name"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="twelve columns">
                        <input
                            className="button-primary"
                            type="submit"
                            value="Post Walk"
                        />
                    </div>
                </div>
            </form>
            <div className="container scenicIndex">
                {props.walks ? loaded() : loading()}
            </div>
        </section>
    );
}

export default Scenic;
