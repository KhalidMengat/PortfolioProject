import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Particles from 'react-particles-js';
import Experience from './components/Experiences';

function App() {
  return (
    <>
      <Particles
      params={{
        particles : {
          number : {
            value : 45,
            density : {
              enable : true,
              value_area : 900


            }
          },
          shape : {
            type : 'circle',
            stroke : {
              width : 8,
              color : '#293133'

            }
          }

        }
      }}
      />
      <Navbar/>
      <Header/>
      <AboutMe/>
      <Experience/>
    </>
  );
}

export default App;
