import React,{useState} from "react";
import { Link } from 'react-router-dom';
import mockup from "../../../assets/images/mockup.png";
import star_shape from "../../../assets/images/star-shape.png";
// eslint-disable-next-line
import Icofont from "react-icofont";
import Slider from "./Slider";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEntry] = useState([]);
    
    const submitForm=(e)=>{
        e.preventDefault();
        const newEntry={email:email,password:password}
        setAllEntry([...allEntry,newEntry]);
        console.log(allEntry)
    }

    return (
        <div>
            <div className="theme-layout" style={{ backgroundColor: "red" }}>
                <div className="authtication  high-opacity">
                    <div className="bg-image">

                    </div>
                    {/* <div className="">hellosfdsfd</div> */}
                    <ul className="welcome-caro">
                        <li className="welcome-box">
                            <Slider />

                            <figure>
                            </figure>

                        </li>
                        <li className="welcome-box">
                            <figure>

                            </figure>

                        </li>
                        {/* <li className="welcome-box">
                            <figure>

                            </figure>

                        </li> */}
                    </ul>
                </div>
                <div className="auth-login">
                    {/* <div className="logo">
            <img src="images/logo.png" alt=" logo1" />
            <span>Socimo</span>
          </div> */}
                    <div className="mockup left-bottom">
                        <img src={mockup} alt="mockup" />
                    </div>
                    <div className="verticle-center">
                        <div className="login-form">
                            <h4>
                                {/* <Icofont icon="icofont-key-hole"/><span>Login</span> */}
                                <i className="icofont-key-hole"></i> Login
                            </h4>
                            <form action="" onSubmit={submitForm} className="c-form">
                                <input type="text" name="email"  id="email" 
                                value={email} 
                                onChange={(e)=>setEmail(e.target.value)}
                                placeholder="User Name @" />
                                <input type="password" name="password" id="password"  
                                value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="xxxxxxxxxx" />
                                <div className="checkbox">
                                    <input type="checkbox" id="checkbox" checked />
                                    <label htmlFor="checkbox">
                                        <span>Remember Me</span>
                                    </label>
                                </div>
                                <div className="forget_pass">
                                    <Link to="/Forgot"
                                        style={{
                                            textDecoration: "#FF1616",
                                            textDecorationLine: "underline",
                                            color: "#FF1616",
                                        }}
                                        
                                    >
                                        Forgot Password?
                                    </Link>
                                </div>
                                <Link to="/Signup"
                                    style={{ float: "right", marginLeft: "1em" }}
                                    href=""
                                    className="main-btn"
                                >
                                    <i className="fas fa-key"></i> Sign up
                                </Link>
                                <button className="main-btn" type="submit">
                                    {/* <Icofont icon="icofont-key-hole"/> */}
                                    <i className="icofont-key"></i> Login
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="mockup right">
                        <img src={star_shape} alt="" />
                    </div>
                </div>
            </div>
           {/* 9999890578 */}
        </div>
    );
}

export default Login;
