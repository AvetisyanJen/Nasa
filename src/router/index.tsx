
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Pages/Home/Home"
import PhotoDay from "../Pages/PhotoDay/PhotoDay"
import Asteroids from "../Pages/Asteroids/Asteroids"
import SubmitPlanet from "../Pages/SubmitPlanet/SubmitPlanet"
import Header from "../Components/Header/Header"
import NavBar from "../Components/NavBar/NavBar"


const Router:React.FC=()=>{
      return(<>
        <BrowserRouter>
        <Header/>
        <NavBar/>
            <Routes>

                <Route path="/" element={<Home />} />
           
                    <Route path="/photo" element={<PhotoDay/>}/>
                    <Route path="/asteroid" element={<Asteroids/>}/>
                    <Route path="/planet" element={<SubmitPlanet/>} />
                 
          
           </Routes>
         </BrowserRouter>
       </>)
 }
 export default Router