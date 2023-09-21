import {Route, Routes} from "react-router-dom";

import {Home} from "../pages/Home.jsx";
import {Cursos} from "../pages/Cursos.jsx";
import {Comunidad} from "../pages/Comunidad.jsx";

export const MyRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'cursos'} element={<Cursos/>}/>
            <Route path={'comunidad'} element={<Comunidad/>} />
        </Routes>
    )
}