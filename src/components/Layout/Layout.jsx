import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
/* const Home = lazy(async () => await import("./pages/Home/Home"));
const Projects = lazy(async () => await import("./pages/Projects/Projects"));
const Contact = lazy(async ()=> await import("./pages/Contact/Contact")); */
import Home from "../../pages/Home/Home";
import Projects from "../../pages/Projects/Projects";
import Contact from "../../pages/Contact/Contact";
import './styles.css';

const Layout = () => {
    return (
        <div className="main__layout">
            <Routes>
                <Route>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </div>
    );
};

export default Layout;
