import React from 'react'
import {HashRouter} from 'react-router-dom'
import Header from './Header'
import Routes1 from './Routes'

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <Header/>
                <Routes1/>
            </HashRouter>
        </div>
    )
}

export default HW5
