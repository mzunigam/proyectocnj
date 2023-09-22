import {NavBar} from "./components/NavBar.jsx";
import {MyRoutes} from "./router/MyRoutes.jsx";
import {responsive,initialResponsive} from "./helpers/responsive.js";

function App() {
    initialResponsive();
    responsive();
    return (
        <>
            <NavBar></NavBar>
            <MyRoutes></MyRoutes>
        </>
    )
}

export default App
