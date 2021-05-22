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
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/run">
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