// import './js/hello.js';

import {BrowserRouter,Route,Routes} from "react-router-dom";
import React from "react";
import './App.css';
import Login from './components/FrontEnd/Login/Login';
import Singup from './components/FrontEnd/SignUp/Signup';
import Forgot from "./components/FrontEnd/ResetPass/Forgot";
import Error from "./Error";
import './css/main.min.css';
import './css/style.css';
import './css/color.css';
import './css/responsive.css';
import './css/icofont.min.css';
import './css/custom.css';
 // eslint-disable-next-line
import Icofont from "react-icofont";
// const loader = document.querySelector(".preloader");

// const showLoader = () => loader.classList.remove("preloader");
// const addClass = () => loader.classList.add("loader-hide");

function App() {
  
  return (
    <>


<BrowserRouter>
    <Routes>
      <Route  path="/" element={<Login/>}/>
      <Route  path="/Signup" element={<Singup/>}/>
      <Route  path="/Forgot" element={<Forgot/>}/>
      {/* <Route  path="/Login" element={<Login/>}/> */}
      <Route  path="*" element={<Error/>}/>
     
      </Routes>
    </BrowserRouter>

    {/* <div>
<div class="page-loader preloader" id="page-loader">
<div class="loader"><span class="loader-item"></span><span class="loader-item"></span><span class="loader-item"></span><span class="loader-item"></span><span class="loader-item"></span><span class="loader-item"></span><span class="loader-item"></span><span class="loader-item"></span><span class="loader-item"></span><span class="loader-item"></span></div>

</div>
    </div> */}
     {/* <Login /> */}
     {/* <Singup /> */}
     {/* <Forgot /> */}
     {/* <Error /> */}
     {/* <Slider /> */}
     
    </>
  );
}

export default App;
