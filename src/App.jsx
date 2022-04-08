import UIHeader from "./components/header/header"
import {  BrowserRouter,  Routes,  Route,} from "react-router-dom";
import IndexHome from "./pages/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UIHeader />
        <Routes>
          <Route path="/" element={ <IndexHome /> }/>
        </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
