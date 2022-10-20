import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Header className="app__header"/>
      <Layout className="app__layout"/>
      <Footer className="app__footer"/>
    </div>
  );
}

export default App;
