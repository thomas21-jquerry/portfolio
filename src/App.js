import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Component/navbar';
import Header from "./Component/header"

function App() {
  return (
    
      <div className="outerBody">
        <div className="navbarcolor">
          <Navbar />
        </div>
        <Header />
        
        
      </div>
    
  );
}

export default App;
