import React from 'react'
import footer from '../../../assets/images/footer.png'
// ./assets/images/footer.png
import { Link } from 'react-router-dom';
function Forgot() {
    return (
        <div>
            <div className="theme-layout gray-bg">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-lg-8">
                            <div className="forget-password">

                                <div className="pass-form">
                                    <h4>Request a Password Reset</h4>
                                    <form method="post" action="{{ route('forgetSendEmail') }}" id="forgetPasswordForm">

                                        <label><i className="icofont-envelope"></i></label>
                                        <input type="text" id="email" name="email" placeholder="Email Address" />
                                        <button className="main-btn" type="submit">Reset Password</button>




                                    </form>
                                    <span>Go Back To <Link to="/" title="">Sign In</Link></span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <figure className="bottom-mockup"><img alt="" src={footer} /></figure>
                <div className="bottombar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <span className="">&copy; Copyright All rights reserved by Flex Tv 2022</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Forgot
