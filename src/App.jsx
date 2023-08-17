import Navbar from "./components/navbar/Navbar";
import About from "./containers/About";
import Certificates from "./containers/Certificates";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Skills from "./containers/Skills";
import Work from "./containers/Work";
import { ScrollRestoration } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Certificates />
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default App;
