import { Routes, Route, BrowserRouter } from "react-router-dom";
import { SigninForm } from "./components/modals/Signin";
import Home from "./components/pages/Home/home";
import { SignupForm } from "./components/modals/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        //Public routes
        <Route path="/Signin" element={<SigninForm />} />
        <Route path="/Signup" element={<SignupForm />} />
        <Route path="/" element={<Home />} />
        //Private routes
        <Route>
          <Route></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
