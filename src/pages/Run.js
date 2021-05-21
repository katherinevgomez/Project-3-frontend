import {useState} from 'react'
import {Link} from 'react-router-dom'

function Run(props) {
    
    const loaded = () => {
        return props.runs.map((run) => (

                    <div key={run._id} className="runIndex">
                        <Link to={`/run/${run._id}`} className="six columns runIcons">
                            <img src={run.image} alt={run.name} />
                            <h1>{run.title}</h1>
                        </Link>
                    </div>

        ))
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return props.runs ? loaded() : loading()
}

export default Run