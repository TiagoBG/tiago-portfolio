import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
/* const Home = lazy(async () => await import("./pages/Home/Home"));
const Projects = lazy(async () => await import("./pages/Projects/Projects"));
const Contact = lazy(async ()=> await import("./pages/Contact/Contact")); */
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header className="app__header" />
      <Routes>
        <Route>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer className="app__footer"/>
    </div>
  );
}

export default App;
