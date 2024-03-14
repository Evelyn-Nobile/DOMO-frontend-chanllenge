import "./App.css";
import {
  Navbar,
  Hero,
  Technology,
  Services,
  Cases,
  Cards,
  Footer,
} from "./components/index.js";

function App() {
  return (
    <div className="container-main">
      <Navbar />
      <Hero />
      <Services />
      <Technology />
      <Cases />
      <Cards />
      <Footer />
      <img src="/img/background-img.jpg" alt="" className="background-img" />
    </div>
  );
}

export default App;
