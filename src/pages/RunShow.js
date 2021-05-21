import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import MapLoader from '../components/Map/MapLoader';

function Show(props) {
    const loaded = () => {
        const run = props.runs.filter(
            (r) => r._id === props.match.params.id
        )[0];
        return typeof run === 'undefined' ? (
            <Redirect to="/" />
        ) : (
            <div>
                <h2>{run.title} location shown below on the map </h2>
                <MapLoader location={run.location}></MapLoader>
            </div>
        );
    };

    const loading = () => {
        // waiting for api call to db (perhaps on refresh)
        return (
            <h1>loading individual run with ID of {props.match.params.id}</h1>
        );
    };

    return props.isLoaded ? loaded() : loading();
}

export default Show;
