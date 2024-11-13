import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Layout from "./components/common/Layout";
import About from "./pages/About";
import OrderNow from "./pages/OrderNow";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="movies" element={<Movies />} />
                <Route path="order-now" element={<OrderNow />} />
            </Route>
        </Routes>
    );
}

export default App;
