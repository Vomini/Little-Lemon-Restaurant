import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import "./App.css";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Chicago from "./components/Chicago";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Menu />
      <Testimonials />
      <Chicago />
      <Footer />
    </div>
  );
}
