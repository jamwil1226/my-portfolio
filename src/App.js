import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/projectList/ProjectList";
import Contact from "./components/contact/Contact";


const App = () => {
  return (
    <div>
      <Intro></Intro>
      <About></About>
      <ProjectList></ProjectList>
      <Contact></Contact>
    </div>
  )
};

export default App;