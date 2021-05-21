import {useEffect, useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../pages/Home'
import Run from '../pages/Run'
import Hike from '../pages/Hike'
import Scenic from '../pages/Scenic'
import RunShow from '../pages/RunShow'
import HikeShow from '../pages/HikeShow'
import ScenicShow from '../pages/ScenicShow'

function Main(props) {

    const [runs, setRuns] = useState(null)

    const RunURL = "http://localhost:3000/run/"

    const getRuns = async () => {
        const response = await fetch(RunURL)
        const data = await response.json()
        setRuns(data)
    }

    const createRuns = async (run) => {
        await fetch(RunURL, {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(run)
        })
        getRuns()
    }

    useEffect(() => getRuns(), [])

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/run">
                    <Run runs={runs} createRuns={createRuns} />
                </Route>
                <Route exact path="/hike">
                    <Hike />
                </Route>
                <Route exact path="/scenic">
                    <Scenic />
                </Route>
                <Route 
                    path="/run/:id"
                    render={(rp) => ( <RunShow {...rp} /> )}
                />
                <Route 
                    path="/hike/:id"
                    render={(rp) => ( <HikeShow {...rp} /> )}
                />
                <Route 
                    path="/scenic/:id"
                    render={(rp) => ( <ScenicShow {...rp} /> )}
                />
            </Switch>
        </main>
    )
}

export default Main