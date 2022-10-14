import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Contact from "./pages/Contact/Contact";

const Home = lazy(async () => await import("./pages/Home/Home"));
const CaseStudies = lazy(
  async () => await import("./pages/CaseStudies/CaseStudies")
);

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route>
          <Route exact path="/" element={<Home />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact-me" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
