
import { Route , Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import bannera from './assets/TwistedBanner.png'
import bannerb from './assets/Mask-group.png'
import bannerc from './assets/Group-2.png'
import Champions from './Components/Champions'
import Anime from './Components/Anime'
import animebanner from './assets/Anime/background3.png'
import Movies from './Components/Movies'

function App() {
  return (
    <>
    <Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path="/twistedfate"  element={<Champions champion="TwistedFate" banner={bannera}/>}  />
    <Route path="/orianna"  element={<Champions champion="Orianna" banner={bannerb}/>}  />
    <Route path="/lissandra"  element={<Champions champion="Lissandra" banner={bannerc}/>}  />
    <Route path="/despicableme"  element= {<Movies name= "despecable me" favchar = "elmacho" scene = "Elmacho Past"/>}  />
    <Route path="/madagascarpenguins"  element= {<Movies  name= "madagascar penguins" favchar = "Ricko" scene = "Plane Crash"/>}  />
    <Route path="/wreckitralph"  element= {<Movies name= "Ralph breaks the internet" favchar = "Vanellope" scene = "Ebay store"/>}  />
    <Route path="/anime" element = {<Anime banner = {animebanner} anime = "My Favourite Anime"/>} />
     </Routes>
    </>
  )
}

export default App
