import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Run from "../pages/Run";
import Hike from "../pages/Hike";
import Scenic from "../pages/Scenic";
import RunShow from "../pages/RunShow";
import HikeShow from "../pages/HikeShow";
import ScenicShow from "../pages/ScenicShow";

const API_PORT = process.env.REACT_APP_DEV_API_PORT
    ? process.env.REACT_APP_DEV_API_PORT
    : "3000";

function Main(props) {
    const [runs, setRuns] = useState(null);
    const [hikes, setHikes] = useState(null);
    const [walks, setWalks] = useState(null);
    const RunURL = `http://localhost:${API_PORT}/run/`;
    const HikeURL = `http://localhost:${API_PORT}/hike/`;
    const WalkURL = `http://localhost:${API_PORT}/scenic/`;

    const getRuns = async () => {
        const response = await fetch(RunURL, {
            method: "get",
            headers: {
                Authorization: `bearer ` + props.token,
            },
        });
        const data = await response.json();
        setRuns(data);
    };

    const getHikes = async () => {
        const response = await fetch(HikeURL, {
            method: "get",
            headers: {
                Authorization: `bearer ` + props.token,
            },
        });
        const data = await response.json();
        setHikes(data);
    };

    const getWalks = async () => {
        const response = await fetch(WalkURL, {
            method: "get",
            headers: {
                Authorization: `bearer ` + props.token,
            },
        });
        const data = await response.json();
        setWalks(data);
    };

    const createRuns = async (run) => {
        await fetch(RunURL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ` + props.token,
            },
            body: JSON.stringify(run),
        });
        getRuns();
    };

    const createHikes = async (hike) => {
        await fetch(HikeURL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ` + props.token,
            },
            body: JSON.stringify(hike),
        });
        getHikes();
    };

    const createWalks = async (walk) => {
        await fetch(WalkURL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ` + props.token,
            },
            body: JSON.stringify(walk),
        });
        getWalks();
    };

    const deleteRun = async (id) => {
        await fetch(`${RunURL}${id}`, {
            method: "delete",
            headers: {
                Authorization: `bearer ` + props.token,
            },
        });
        getRuns();
    };

    const deleteHike = async (id) => {
        await fetch(`${HikeURL}${id}`, {
            method: "delete",
            headers: {
                Authorization: `bearer ` + props.token,
            },
        });
        getHikes();
    };

    const deleteWalk = async (id) => {
        await fetch(`${WalkURL}${id}`, {
            method: "delete",
            headers: {
                Authorization: `bearer ` + props.token,
            },
        });
        getWalks();
    };

    const updateRun = async (updateRun, id) => {
        await fetch(`${RunURL}${id}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ` + props.token,
            },
            body: JSON.stringify(updateRun),
        });
        getRuns();
    };

    const updateHike = async (updateHike, id) => {
        await fetch(`${HikeURL}${id}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ` + props.token,
            },
            body: JSON.stringify(updateHike),
        });
        getHikes();
    };

    const updateWalk = async (updateWalk, id) => {
        await fetch(`${WalkURL}${id}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ` + props.token,
            },
            body: JSON.stringify(updateWalk),
        });
        getWalks();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => getRuns(), []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => getHikes(), []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => getWalks(), []);

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home username={runs?.username} />
                </Route>
                <Route exact path="/run">
                    <Run runs={runs} createRuns={createRuns} />
                </Route>
                <Route exact path="/hike">
                    <Hike hikes={hikes} createHikes={createHikes} />
                </Route>
                <Route exact path="/scenic">
                    <Scenic walks={walks} createWalks={createWalks} />
                </Route>
                <Route
                    path="/run/:id"
                    render={(rp) => (
                        <RunShow
                            {...rp}
                            runs={runs}
                            deleteRun={deleteRun}
                            updateRun={updateRun}
                        />
                    )}
                />
                <Route
                    path="/hike/:id"
                    render={(rp) => (
                        <HikeShow
                            {...rp}
                            hikes={hikes}
                            deleteHike={deleteHike}
                            updateHike={updateHike}
                        />
                    )}
                />
                <Route
                    path="/scenic/:id"
                    render={(rp) => (
                        <ScenicShow
                            walks={walks}
                            {...rp}
                            deleteWalk={deleteWalk}
                            updateWalk={updateWalk}
                        />
                    )}
                />
            </Switch>
        </main>
    );
}

export default Main;
