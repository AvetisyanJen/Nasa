import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import PhotoDay from '../Pages/PhotoDay/PhotoDay'
import Asteroids from '../Pages/Asteroids/Asteroids'
import SubmitPlanet from '../Pages/SubmitPlanet/SubmitPlanet'
import Header from '../Components/Header/Header'
import NavBar from '../Components/NavBar/NavBar'


const Router: React.FC = () => {
  return (<>
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>

        <Route path="/Nasa" element={<Home />} />

        <Route path="/nasa_photo" element={<PhotoDay />} />
        <Route path="/nearby_asteroids" element={<Asteroids />} />
        <Route path="/submit_new_planet" element={<SubmitPlanet />} />


      </Routes>
    </BrowserRouter>
  </>)
}
export default Router