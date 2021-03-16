import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from 'react-particles-js';

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
              width : 6,
              color : '#293133'

            }
          }

        }
      }}
      />
      <Navbar/>
      <Header/>
    </>
  );
}

export default App;
