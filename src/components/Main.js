import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Run from '../pages/Run';
import Hike from '../pages/Hike';
import Scenic from '../pages/Scenic';
import RunShow from '../pages/RunShow';
import HikeShow from '../pages/HikeShow';
import ScenicShow from '../pages/ScenicShow';

const appData = {
    runs: [
        {
            _id: '123',
            location: '1600 Walnut Street, Philadelphia, PA',
            title: 'Test Run',
        },
        {
            _id: '321',
            location: '2000 Broadway, New York, NY 10023',
            title: 'Second Test Run',
        },
    ],
};

function Main(props) {
    const [allData, setAllData] = useState({ isLoaded: false });
    useEffect(() => {
        setTimeout(() => {
            setAllData({ ...appData, isLoaded: true });
        }, 500);
    }, [allData.isLoaded]);

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/run">
                    <Run />
                </Route>
                <Route path="/hike">
                    <Hike />
                </Route>
                <Route path="/scenic">
                    <Scenic />
                </Route>
                <Route
                    path="/run/:id"
                    render={(rp) => (
                        <RunShow
                            {...rp}
                            runs={appData.runs}
                            isLoaded={allData.isLoaded}
                        />
                    )}
                />
                <Route path="/hike/:id" render={(rp) => <HikeShow {...rp} />} />
                <Route
                    path="/scenic/:id"
                    render={(rp) => <ScenicShow {...rp} />}
                />
            </Switch>
        </main>
    );
}

export default Main;
