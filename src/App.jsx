import UIHeader from "./components/header/header"
import {  BrowserRouter,  Routes,  Route,} from "react-router-dom";
import IndexHome from "./pages/index";
import SearchResult from "./pages/search/search";
import {SearchProvider} from "../store/searchContext";
import UILogin from "./pages/login/login";
import UIFooter from "./components/footer/footer";
import UIError from "./pages/error/error";
import UIDashboard from "./pages/dashboard/dashboard";
import {AuthProvider} from "../store/authContext";
import RequireAuth, {AuthGranted} from "./RequireAuth";
import UISignUp from "./pages/signup/signup";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <SearchProvider>
        <AuthProvider>
          <UIHeader />
          <Routes>
            <Route path="/" element={ <IndexHome /> }/>
            <Route path="/search" element={ <SearchResult /> }/>
            <Route path="/login" element={ 
              <AuthGranted>
                <UILogin /> 
              </AuthGranted>
            }/>
            <Route path="/create-account" element={ 
                <UISignUp /> 
            }/>
            <Route path="/dashboard" element={ 
              <RequireAuth>
                <UIDashboard /> 
              </RequireAuth>
            }/>
            <Route path="*" element={ <UIError /> }/>
          </Routes>
          <UIFooter />
          </AuthProvider>
        </SearchProvider>
      </BrowserRouter>

    </div>
  )
}

export default App
