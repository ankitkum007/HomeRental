import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreateListing from "./pages/CreatedListing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="create-listing" element={<CreateListing />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
  
 