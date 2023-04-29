import "./reset.css";
import "./modern-normalize.css";
import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home/Home";
import Cases from "./components/Cases";
import About from "./components/About";
import Blog from "./components/Blog";
import Team from "./components/Team";
import RequestForm from "./components/RequestForm";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Cases />
      <Blog />
      <Team />
      <RequestForm />
      <Contact />
    </div>
  );
}

export default App;
