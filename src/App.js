import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/nav/Nav";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProjectList from "./components/projectList/ProjectList";
import Contact from "./components/contact/Contact";


const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Intro></Intro>
      <About></About>
      <ProjectList></ProjectList>
      <Contact></Contact>
    </div>
  )
};

export default App;