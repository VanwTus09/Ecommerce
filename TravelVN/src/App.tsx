import { Routes, Route, BrowserRouter } from "react-router-dom";
import { SigninForm } from "./components/modals/Signin";
import Home from "./components/pages/Home/home";
import { SignupForm } from "./components/modals/Signup";
import { ListTour } from "./components/pages/Tours/ListTour";
import { TourDetail } from "./components/pages/Tours/TourDetail";
import { Toaster } from "sonner"
function App() {
  return (
    
    <BrowserRouter>
      <Toaster richColors position="top-right" />
      <Routes>
        //Public routes
        <Route path="/Signin" element={<SigninForm />} />
        <Route path="/Signup" element={<SignupForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/ListTour" element={<ListTour/>}/>
        <Route path="/TourDetail/:id" element={<TourDetail/>}/>
        //Private routes
        <Route>
          <Route></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
