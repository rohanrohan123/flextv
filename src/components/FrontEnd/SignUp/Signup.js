import React from "react";
import { Link } from 'react-router-dom';

function Singup() {
    return (
        <div>
            <div className="theme-layout">

                <div className="authtication bluesh high-opacity">
                    <div className="verticle-center">
                        <div className="welcome-note">
                            {/* <div className="logo"><a href="#"><img src="{{ \App\Helper\Helpers::get_logo_url('secondary_logo') }}" alt="no logo"/></a></div> */}
                            <h1>Welcome to FlexTv</h1>
                            <p style={{textAlign:"justify"}}>
                                Flex Tv is a one and only plateform for the researcheres, students, and Acdamic people. Every one can join this plateform free and share his ideas and research with seniors and juniours comments and openions.
                            </p>
                        </div>
                        <div className="bg-image" style={{}}></div>
                    </div>
                </div>
                <div className="auth-login">
                    <div className="verticle-center">
                        <div className="signup-form">
                            <h4><i className="fas fa-lock"></i> Signup</h4>

                            <form id="registerForm" action="" className="c-form">

                                <div className="row merged-10">
                                    <div className="col-lg-12"><h4>What type of researcher are you?</h4></div>
                                    <div className="col-lg-6 col-sm-6 col-md-6">
                                        <input type="text" name="firstname" id="firstname" placeholder="First Name" />

                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-md-6">
                                        <input type="text" name="lastname" id="lastname" placeholder="Last Name" />

                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-md-6">
                                        <input type="text" name="email" id="email" placeholder="Email Address" />

                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-md-6">
                                        <input type="password" name="password" id="password" placeholder="Password" />

                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-md-6">
                                        <input type="radio" id="Academic" name="occupation" value="academic" />
                                        <label htmlFor="male">Academic Or Student</label>

                                    </div>
                                    <div  className="col-lg-6 col-sm-6 col-md-6 ngo">
                                        <input type="radio" id="Corporate" name="occupation" value="Corporate"  />
                                        <label htmlFor="male">Corporate,Govt,NGO Person</label>

                                    </div>
                                    

                                    <div className="col-lg-6 col-sm-6 col-md-6">
                                        <input type="radio" id="medical" name="occupation" value="medical" />
                                        <label htmlFor="male">Medical</label>

                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-md-6">
                                        <input type="radio" id="notarsearcher" name="occupation" value="Nota Rsearcher" />
                                        <label htmlFor="male">Not a Rsearcher</label>

                                    </div>

                                    <div className="col-lg-6 col-sm-6 col-md-6">
                                    <input type="text" name="lastname" id="InstituteCompany" placeholder="Institute, Company" />

                                    </div>

                                    <div className="col-lg-6 col-sm-6 col-md-6">
                                    <input type="text" name="department" id="department" placeholder="Department" />

                                    </div>
                                    <div className="col-lg-12 col-sm-6 col-md-12">
                                    <input type="text" name="position" id="position" placeholder="Your Position" />

                                    </div>
                                    <div className="col-lg-12">
                                        <div className="gender">
                                            <input type="radio" id="male" name="gender" value="male" checked />
                                            <label htmlFor="male">Male</label>
                                            <input type="radio" id="female" name="gender" value="female" />
                                            <label htmlFor="female">Female</label>
                                        </div>

                                    </div>

                                    <div className="col-lg-12">
                                        <div className="checkbox">
                                            <input type="checkbox" id="checkbox" name="termsServices" checked required />
                                            <label htmlFor="checkbox"><span>I agree the terms of Services and acknowledge the privacy policy</span></label>
                                        </div>
                                        <button className="main-btn" type="submit"><i className="fas fa-key"></i> Signup</button>
                                    </div>
                                    <span className="signin-text">Already have a account? <Link to="/">Sign in</Link></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>


    );
}

export default Singup;






