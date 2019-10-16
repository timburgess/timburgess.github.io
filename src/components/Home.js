import React, { Fragment } from 'react'
import './Home.css'
// import Footer from './Footer'
import SpeedDials from './SpeedDials'

const Home = () => (
  <Fragment>
  <div className="name">
    <h1>Tim Burgess</h1>
    <div className="subtitle">
      <div>I build solid React Applications, using things like</div>
      <div>Material-UI / Redux / Electron / GraphQL / Leaflet</div>
    </div>
  </div>
  <SpeedDials />
  </Fragment>
)

export default Home
