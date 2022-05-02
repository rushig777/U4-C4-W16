import {MainRoutes} from "./Routes/MainRoutes"
import './App.css';
import {Navbar} from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar/>
     <MainRoutes />
    </div>
  );
}

export default App;
